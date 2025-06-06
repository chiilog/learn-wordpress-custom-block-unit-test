/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';
import type { BlockSaveProps } from '@wordpress/blocks';

import type { BlockAttributes } from './BlockAttributes';
import getClassNameByType from './utils/getClassNameByType';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 */
export default function save( {
	attributes: { message, type },
}: BlockSaveProps< BlockAttributes > ) {
	const classNames = getClassNameByType( { type } );
	const blockProps = useBlockProps.save( { className: classNames } );
	return (
		<div { ...blockProps }>
			<p>{ message }</p>
		</div>
	);
}
