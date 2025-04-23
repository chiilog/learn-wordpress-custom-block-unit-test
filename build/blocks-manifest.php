<?php
// This file is generated. Do not modify it manually.
return array(
	'example-static' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/example-static',
		'version' => '0.1.0',
		'title' => 'Example Static',
		'category' => 'text',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'message' => array(
				'type' => 'string',
				'default' => 'Hello from the block!'
			)
		),
		'textdomain' => 'example-static',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
