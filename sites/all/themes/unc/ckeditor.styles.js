/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

/*
 * This file is used/requested by the 'Styles' button.
 * The 'Styles' button is not enabled by default in DrupalFull and DrupalFiltered toolbars.
 */
if(typeof(CKEDITOR) !== 'undefined') {
    CKEDITOR.addStylesSet( 'drupal',
    [
            /* Block Styles */

            // These styles are already available in the "Format" drop-down list, so they are
            // not needed here by default. You may enable them to avoid placing the
            // "Format" drop-down list in the toolbar, maintaining the same features.
            /*
            { name : 'Paragraph'		, element : 'p' },
            { name : 'Heading 1'		, element : 'h1' },
            { name : 'Heading 2'		, element : 'h2' },
            { name : 'Heading 3'		, element : 'h3' },
            { name : 'Heading 4'		, element : 'h4' },
            { name : 'Heading 5'		, element : 'h5' },
            { name : 'Heading 6'		, element : 'h6' },
            { name : 'Preformatted Text', element : 'pre' },
            { name : 'Address'			, element : 'address' },
            */

            { name : 'Blue Title'		, element : 'h3', styles : { 'color' : 'Blue' } },
            { name : 'Red Title'		, element : 'h3', styles : { 'color' : 'Red' } },

            /* Inline Styles */

            // These are core styles available as toolbar buttons. You may opt enabling
            // some of them in the "Styles" drop-down list, removing them from the toolbar.
            /*
            { name : 'Strong'			, element : 'strong', overrides : 'b' },
            { name : 'Emphasis'			, element : 'em'	, overrides : 'i' },
            { name : 'Underline'		, element : 'u' },
            { name : 'Strikethrough'	, element : 'strike' },
            { name : 'Subscript'		, element : 'sub' },
            { name : 'Superscript'		, element : 'sup' },
            */

            { name : 'Marker: Yellow'	, element : 'span', styles : { 'background-color' : 'Yellow' } },
            { name : 'Marker: Green'	, element : 'span', styles : { 'background-color' : 'Lime' } },

            { name : 'Big'				, element : 'big' },
            { name : 'Small'			, element : 'small' },
            { name : 'Typewriter'		, element : 'tt' },

            { name : 'Computer Code'	, element : 'code' },
            { name : 'Keyboard Phrase'	, element : 'kbd' },
            { name : 'Sample Text'		, element : 'samp' },
            { name : 'Variable'			, element : 'var' },

            { name : 'Deleted Text'		, element : 'del' },
            { name : 'Inserted Text'	, element : 'ins' },

            { name : 'Cited Work'		, element : 'cite' },
            { name : 'Inline Quotation'	, element : 'q' },

            { name : 'Language: RTL'	, element : 'span', attributes : { 'dir' : 'rtl' } },
            { name : 'Language: LTR'	, element : 'span', attributes : { 'dir' : 'ltr' } },

            /* Object Styles */

            {
                    name : 'Image on Left',
                    element : 'img',
                    attributes :
                    {
                            'style' : 'padding: 5px; margin-right: 5px',
                            'border' : '2',
                            'align' : 'left'
                    }
            },

            {
                    name : 'Image on Right',
                    element : 'img',
                    attributes :
                    {
                            'style' : 'padding: 5px; margin-left: 5px',
                            'border' : '2',
                            'align' : 'right'
                    }
            },
            /* UNC Styles */
            
            { name : 'Image on right'	, element : 'img', attributes : { 'class' : 'image-right' } },
            { name : 'Image on left'	, element : 'img', attributes : { 'class' : 'image-left' } },
            { name : 'Image centered'	, element : 'img', attributes : { 'class' : 'image-inline' } },
            { name : 'Borderless Table', element : 'table', styles: { 'border-style': 'hidden', 'background-color' : '#E6E6FA' } },
            { name : 'Square Bulleted List', element : 'ul', styles : { 'list-style-type' : 'square' } },
            { name : 'Titulo destacado', element : 'span', styles : { 'font-size': '85%','font-weight': 'bold','text-transform': 'uppercase' } },
            { name : 'Titulo destacado2', element : 'span', styles : { 'font-size': 'xx-small !important','font-weight': 'bold','text-transform': 'uppercase' } },
            { name : 'Tabla Title', element : 'div', styles : { 'background-color': '#e7e7e7','font-weight': 'bold','line-height': '1.5em','padding': '10px','margin': '20px 0 5px' } },
            { name : 'Tabla Data', element : 'div', styles : { 'border-bottom': '1px solid #cccccc', 'line-height': '1.5em','padding': '10px 0px'} },
            { name : 'Tabla Data Dashed', element : 'div', styles : { 'border-bottom': '1px dashed #c6c6c6','line-height': '1.5em', 'padding': '10px 0px'} },
            { name : 'Tabla Data Clear', element : 'div', styles : { 'line-height': '1.5em', 'padding': '10px 0px'} },
            { name : 'News Photo Left', element : 'span', styles : { 'float': 'left', 'padding': '0 1em 0.7em 0'} },
            { name : 'News Photo Right', element : 'span', styles : { 'float': 'right', 'padding': '1em 0 1em 1em'} },
            { name : 'Recuadro Info Dest2 Title', element : 'div', styles : { 'background-color': '#dadada','font-weight': 'bold','line-height': '1.5em', 'margin-bottom': '2px','padding': '10px'} },
            { name : 'Recuadro Info Dest2 Data', element : 'div', styles : { 'background-color': '#e9e9e9','line-height': '1.5em','margin-bottom': '1em','padding': '1em'} }
    ]);
}