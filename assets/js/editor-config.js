var toolbarOptions = [
    [{
        'font': []
    }],
    [{
        'header': [1, 2, 3, 4, 5, 6, false]
    }],
    [{
            'color': []
        },
        {
            'background': []
        }
    ], // dropdown with defaults from theme
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    [{
        'align': []
    }],
    ['blockquote', 'code-block'],
    [{
        'list': 'ordered'
    }, {
        'list': 'bullet'
    }],
    [{
        'script': 'sub'
    }, {
        'script': 'super'
    }], // superscript/subscript
    [{
        'indent': '-1'
    }, {
        'indent': '+1'
    }], // outdent/indent
    [{
        'direction': 'rtl'
    }], // text direction

    // [{
    //     'size': ['small', false, 'large', 'huge']
    // }], // custom dropdown
    ['link', 'image', 'video'],
    ['clean'] // remove formatting button
];


var options = {
    modules: {
        toolbar: toolbarOptions
    },
    placeholder: 'Compose an epic...',
    theme: 'snow'
};

var editor = new Quill('#editor', options);