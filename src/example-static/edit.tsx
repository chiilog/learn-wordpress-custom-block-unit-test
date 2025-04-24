/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import type { BlockEditProps } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import type { BlockAttributes } from './BlockAttributes';
import getClassNameByType from './utils/getClassNameByType';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 */
export default function Edit( {
	attributes: { message, type },
	setAttributes,
}: BlockEditProps< BlockAttributes > ) {
	const classNames = getClassNameByType( { type } );
	const blockProps = useBlockProps( { className: classNames } );

	const onChangeType = ( value: string ) => {
		setAttributes( { type: value as BlockAttributes[ 'type' ] } );
	};

	const selectTypeControl = (
		<InspectorControls>
			<PanelBody
				title={ __( 'Type', 'example-static' ) }
				initialOpen={ true }
			>
				<SelectControl
					label={ __( 'Type', 'example-static' ) }
					value={ type }
					onChange={ onChangeType }
					options={ [
						{
							label: __( 'Neutral', 'example-static' ),
							value: 'neutral',
						},
						{
							label: __( 'Warning', 'example-static' ),
							value: 'warning',
						},
						{
							label: __( 'Info', 'example-static' ),
							value: 'info',
						},
						{
							label: __( 'Success', 'example-static' ),
							value: 'success',
						},
						{
							label: __( 'Error', 'example-static' ),
							value: 'error',
						},
					] }
				/>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<>
			{ selectTypeControl }
			<div { ...blockProps }>
				<RichText
					tagName="p"
					value={ message }
					onChange={ ( value ) => {
						setAttributes( { message: value } );
					} }
				/>
			</div>
		</>
	);
}
