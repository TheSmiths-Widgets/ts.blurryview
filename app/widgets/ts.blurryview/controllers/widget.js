var BlurView = require('bencoding.blur');

var _ERRORS = {
        MISSING_FOREGROUND_IMAGE: "A foreground image must be supplied to the blurry view.",
        MISSING_BACKGROUND_IMAGE: "A background image must be supplied to the blurry view.",
        MISSING_TITLE: "A title must be supplied to the blurry view."
    },
    _CONFIG = {
        colors: {
            title: "#FFFFFF",
            subtitle: "#FFFFFF"
        },
        fonts: {
            title: { fontSize: 14, fontWeight: 'bold' },
            subtitle: { fontSize: 10 }
        },
        paddings: {
            interTitle: 5,
            outer: 20,
        },
        sizes: {
            innerHeight: 100,
            innerWidth: 100,
            outerHeight: 180,
            outerWidth: Ti.UI.FILL,
        },
        borderColor: "#FFFFFF",
        borderRadius: 50,
        borderWidth: 0,
        blurRadius: 5,
    };

function init (options) {
    /* First of all, ensure that necessary options have been supplied */
    if (options.foregroundImage === undefined) { throw(_ERRORS.MISSING_FOREGROUND_IMAGE); }
    if (options.backgroundImage === undefined) { throw(_ERRORS.MISSING_BACKGROUND_IMAGE); }
    if (options.title === undefined) { throw(_ERRORS.MISSING_TITLE); }

    /* Then, merge the default options with the given one */
    _.extend(_CONFIG, options);
    
    /* Once everything is ready, just apply styles */
    $.index.applyProperties({
        'width': _CONFIG.sizes.outerWidth,
        'height': _CONFIG.sizes.outerHeight
    });

    $.title.applyProperties({
        'font': _CONFIG.fonts.title,
        'bottom': _CONFIG.paddings.inner,
        'color': _CONFIG.colors.title,
        'text': _CONFIG.title
    });

    $.subtitle.applyProperties(_CONFIG.subtitle !== undefined ? {
        'font': _CONFIG.fonts.subtitle,
        'top': _CONFIG.paddings.interTitles,
        'color': _CONFIG.colors.subtitle,
        'text': _CONFIG.subtitle
    } : {
        'top': 0,
        'height': 0,
        'visible': false
    });

    $.titles.applyProperties({
        'bottom': _CONFIG.paddings.outer,
    });

    $.foregroundImage.applyProperties({
        'image': _CONFIG.foregroundImage,
        'top': _CONFIG.paddings.outer,
        'width': _CONFIG.sizes.innerWidth,
        'height': _CONFIG.sizes.innerHeight,
        'borderColor': _CONFIG.borderColor,
        'borderWidth': _CONFIG.borderWidth,
        'borderRadius': _CONFIG.borderRadius,
    });

    $.index.add(BlurView.createBasicBlurView({
        'width': Ti.UI.FILL,
        'height': Ti.UI.FILL,
        'blurRadius': _CONFIG.blurRadius,
        'zIndex': 1,
        'image': _CONFIG.backgroundImage
    }));
}

exports.init = init;
