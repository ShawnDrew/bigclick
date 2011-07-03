# bigclick - create a larger clickable area 

* Version: 0.1
* By: Shawn Drew - http://shawndrew.me

## Description

Handling a larger click area based on a child anchor href attribute

## Usage

Minimal

	$('selector').bigClick();
	
With options

	$('.banner').bigClick({
		addClass: 'big-click',
		anchorSelector: 'a:last',
	});

## Options

The plugin takes 2 options:

	// Adds a class to element on success
	addClass: 'big-click' (default: false)

	// Will use provided selector for link source
	anchorSelector: 'a:last' (default: a:first)