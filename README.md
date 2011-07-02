# bigclick - create a larger clickable area 

* Version: 0.1

## Author

Shawn Drew - http://shawndrew.me

## Description

Handling a larger click area based on a child anchors href attribute

## Usage

Basic

	$('selector').bigClick({option: value});
	
With options

	$('.banner').bigClick({
		addClass: 'big-click',
		anchorSelector: 'a:last',
	});

## Options

The plugin takes 3 options:

	// Will use provided selector for link source
	anchorSelector:   (default: a:first)

	// Adds a class to 
	addClass:  (default: false)