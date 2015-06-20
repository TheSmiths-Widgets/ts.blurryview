# Blurry View [![Titanium](http://www-static.appcelerator.com/badges/titanium-git-badge-sq.png)](http://www.appcelerator.com/titanium/) [![Alloy](http://www-static.appcelerator.com/badges/alloy-git-badge-sq.png)](http://www.appcelerator.com/alloy/) [![License](http://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat)](http://choosealicense.com/licenses/apache-2.0/)

This widget for the [Appcelerator](http://www.appcelerator.com) Titanium Alloy MVC framework
provides an easy way to display a picture on the top of a blurry background. 

## Preview
![preview](https://raw.githubusercontent.com/thesmiths-widgets/ts.blurryview/doc/images/preview.png)

## Quick Start

### Get it [![gitTio](http://gitt.io/badge.png)](http://gitt.io/component/ts.blurryview) [![npm](https://badge.fury.io/js/ts.blurryview.svg)](http://badge.fury.io/js/ts.blurryview)

Download this repository and install it:

* In your application's config.json file, include the following line in your dependencies:

```json
"dependencies": {
    "ts.blurryview": "1.0"
}
```

* Copy the `ts.blurryview` folder into your `app/widgets` directory.
* Be sure to check and install all dependencies.


**Or use your favorite package manager** 

- [gitTio](http://gitt.io/cli): `gittio install ts.blurryview`

- [npm](https://npmjs.com): `npm install ts.blurryview`

### Use it

* Require the widget in a view:

**file1.xml**
```xml
<Widget id="blurryView" src="ts.blurryview" />`
```
Which create a reference in your controller, accessible via: `$.blurryView`

* Or, require it directly in a controller :

```javascript
var blurryView = Alloy.createWidget("ts.blurryview");
```

Do not forget to initialize the widget; Before opening your window, call the widget's *init* method. For instance:

```
$.blurryView.init({
    title: "The Smiths",
    backgroundImage: "background.jpg",
    foregroundImage: "avatar.jpg",
    blurRadius: 10,
    paddings: {
        outer: 15
    }
});
```

Here is the list of available options: 

- `title <String>`: The title to display
- `foregroundImage <String | Image | Blob>`: The main clear image.
- `backgroundImage <String | Image | Blob>`: The blurry background image.
- `[subtitle] <String>`: The subtitle below the title, if any.
- `[colors] <Object>`: Colors of title or subtitle.
    - `title <String>`: The title's color
    - `subtitle <String>`: The subtitle's color
- `[fonts] <Object>`: Fonts of title or subtitle
    - `title <Object>`: The title's font
    - `subtitle <Object>`: The subtitle`s font
- `[sizes] <Object>`: Set the sizes of elements
    - `innerHeight <Number>`: The foreground picture's height
    - `innerWidth <Number>`: The foreground picture's width
    - `outerHeight <Number>`: The background picture's height
    - `outerWidth <Number>`: The background picture's width
- `[paddings] <Object>`: All paddings 
    - `interTitle <Number>`: Space between title and subtitle
    - `outer <Number>`: Space from the border of the widget
- `[borderColor] <String>`: The border color of the foreground image
- `[borderWidth] <Number>`: The border width of the foreground image
- `[borderRadius] <Number>`: The border radius of the foreground image
- `[blurRadius] <Number>`: The intensity of the blur effect

## Changelog
* 1.0 First version

## Dependencies
* [bencoding.blur](https://github.com/benbahrenburg/Ti.BlurView)

[![wearesmiths](http://wearesmiths.com/media/logoGitHub.png)](http://wearesmiths.com)

Appcelerator, Appcelerator Titanium and associated marks and logos are trademarks of Appcelerator, Inc.  
Titanium is Copyright (c) 2008-2015 by Appcelerator, Inc. All Rights Reserved.  
Titanium is licensed under the Apache Public License (Version 2).  
