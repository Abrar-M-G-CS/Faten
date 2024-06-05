let express = require("express");
let app = express();
const path = require('path');
let ejs = require('ejs');
var image = require('../static/image_class')

app.set('view engine', 'ejs');
app.use(express.static("../static"));
let reqPath = path.join(__dirname, '../');

app.get('/', function(req, res) {
    res.render('home.ejs');
});

app.get('/digit', function(req, res) {
    res.render('digit_option.ejs');
});

app.get('/character', function(req, res) {
    res.render('character_option.ejs');
});

app.get('/signlanguage', function(req, res) {
    res.render('sign_option.ejs');
});

app.get('/digit/learn', function(req, res) {
    var digit = req.query.choice;
    // console.log(digit);
    if(digit === undefined) res.render('digit_choice.ejs');
    else {
        res.render('digit_learn.ejs', {digit, english: ENG_NUMBER_CLASSES[digit], arabic: ARB_NUMBER_CLASSES[digit]});
    }
});
app.get('/character/learn', function(req, res) {
    var digit = req.query.choice;
    // console.log(digit);
    if(digit === undefined) res.render('character_choice.ejs');
    else {
        res.render('character_learn.ejs', {digit, arb_char: ARB_CHAR_CLASS[digit], arb_prnc: ARB_CHAR_PRONOUNCE_CLASS[digit]});
    }
});


app.get('/signlanguage/learn', function(req, res) {
    var sign = req.query.choice;
    if (sign === undefined) {
        res.render('sign_choice.ejs');
    } else {
        res.render('sign_learn.ejs', {sign: sign,arb_sign: ARB_sign_CLASS[sign],
            arb_prnc: ARB_sign_PRONOUNCE_CLASS[sign], 
            images

        });
    }
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});

app.get('/digit/test', function(req, res) {
    res.render('digit_test.ejs');
});

app.get('/character/test', function(req, res) {
    res.render('character_test.ejs');
});

app.get('/sign/test', function(req, res) {
    res.render('sign_test.ejs');
});


app.get('/sign/learn', function(req, res) {
    const images = [
        { fileName: 'Alef.jpg', description: 'الف' },
        { fileName: 'Bah.jpg', description: 'باء' },
        { fileName: 'Teh.jpg', description: 'تاء' },
        { fileName: 'Theh.jpg', description: 'ثاء' },
        { fileName: 'Jeem.jpg', description: 'جيم' },
        { fileName: 'Haa.jpg', description: 'حاء' },
        { fileName: 'Kah.jpg', description: 'خاء' },
        { fileName: 'Dal.jpg', description: 'دال' },
        { fileName: 'Thel.jpg', description: 'ذال' },
        { fileName: 'Rah.jpg', description: 'راء' },
        { fileName: 'Zain.jpg', description: 'زين' },
        { fileName: 'Seen.jpg', description: 'سين' },
        { fileName: 'Sheen.jpg', description: 'شين' },
        { fileName: 'Sad.jpg', description: 'صاد' },
        { fileName: 'Dad.jpg', description: 'ضاد' },
        { fileName: 'Tah.jpg', description: 'طاء' },
        { fileName: 'Dah.jpg', description: 'ظاء' },
        { fileName: 'Ain.jpg', description: 'عين' },
        { fileName: 'Gain.jpg', description: 'غين' },
        { fileName: 'fah.jpg', description: 'فاء' },
        { fileName: 'qaf.jpg', description: 'قاف' },
        { fileName: 'kaf.jpg', description: 'كاف' },
        { fileName: 'lam.jpg', description: 'لام' },
        { fileName: 'meem.jpg', description: 'ميم' },
        { fileName: 'noon.jpg', description: 'نون' },
        { fileName: 'hah.jpg', description: 'هاء' },
        { fileName: 'waw.jpg', description: 'واو' },
        { fileName: 'yah.jpg', description: 'ياء' },
        { fileName: 'laa.jpg', description: 'لا' },
        { fileName: 'tah_marbuta.jpg', description: 'تاء مربوطة' },
        { fileName: 'al.jpg', description: 'ال' },

        
        // Add other image filenames and s here
    ];
    res.render('sign_learn.ejs', { images });
});

app.listen(3232, function() {
    console.log("Server static on 3232");
});

const ARB_NUMBER_CLASSES = {
    0: 'صفر',
    1: 'واحد',
    2: 'اثنان',
    3: 'ثلاثة',
    4: 'اربعة',
    5: 'خمسة',
    6: 'ستة',
    7: 'سبعة',
    8: 'ثمانية',
    9: 'تسعة'
}
const ARB_CHAR_PRONOUNCE_CLASS = {
    0: 'ألف',
    1: 'باء',
    2: 'تاء',
    3: 'ثاء',
    4: 'جيم',
    5: 'حاء',
    6: 'خاء',
    7: 'دال',
    8: 'ذال',
    9: 'راء',
    10: 'زاء',
    11: 'سين',
    12: 'شين',
    13: 'صاد',
    14: 'ضاد',
    15: 'طاء',
    16: 'ظاء',
    17: 'عين',
    18: 'غين',
    19: 'فاء',
    20: 'قاف',
    21: 'كاف',
    22: 'لام',
    23: 'ميم',
    24: 'نون',
    25: 'هاء',
    26: 'واو',
    27: 'ياء'
}
const ARB_CHAR_CLASS = {
    0: 'ا',
    1: 'ب',
    2: 'ت',
    3: 'ث',
    4: 'ج',
    5: 'ح',
    6: 'خ',
    7: 'د',
    8: 'ذ',
    9: 'ر',
    10: 'ز',
    11: 'س',
    12: 'ش',
    13: 'ص',
    14: 'ض',
    15: 'ط',
    16: 'ظ',
    17: 'ع',
    18: 'غ',
    19: 'ف',
    20: 'ق',
    21: 'ك',
    22: 'ل',
    23: 'م',
    24: 'ن',
    25: 'ه',
    26: 'و',
    27: 'ي'
}
const ENG_NUMBER_CLASSES = {
    0: 'صفر',
    1: 'واحد',
    2: 'اثنان',
    3: 'ثلاثة',
    4: 'اربعة',
    5: 'خمسة',
    6: 'ستة',
    7: 'سبعة',
    8: 'ثمانية',
    9: 'تسعة'
}


const ARB_sign_PRONOUNCE_CLASS = {
    'ا': 'ألف',
    'ع': 'عين',
    'ال': 'ال',
    'اللغة-العربية-للإشارات': 'اللغة-العربية-للإشارات',
    'ب': 'باء',
    'ض': 'ضاد',
    'د': 'دال',
    'ف': 'فاء',
    'غ': 'غين',
    'ح': 'حاء',
    'ه': 'هاء',
    'ك': 'كاف',
    'خ': 'خاء',
    'لا': 'لا',
    'ل': 'لام',
    'م': 'ميم',
    'ن': 'نون',
    'ق': 'قاف',
    'ر': 'راء',
    'ص': 'صاد',
    'س': 'سين',
    'ش': 'شين',
    'ط': 'طاء',
    'ت': 'تاء',
    'ة': 'تاء مربوطة',
    'ث': 'ثاء',
    'و': 'واو',
    'ي': 'ياء',
    'ز': 'زاي',
    'ج': 'جيم',
    'ذ': 'ذال',
    'ظ': 'ظاء'
};

const ARB_sign_CLASS = {
    'ا': 'ا',
    'ع': 'ع',
    'ال': 'ال',
    'اللغة-العربية-للإشارات': 'اللغة-العربية-للإشارات',
    'ب': 'ب',
    'ض': 'ض',
    'د': 'د',
    'ف': 'ف',
    'غ': 'غ',
    'ح': 'ح',
    'ه': 'ه',
    'ك': 'ك',
    'خ': 'خ',
    'لا': 'لا',
    'ل': 'ل',
    'م': 'م',
    'ن': 'ن',
    'ق': 'ق',
    'ر': 'ر',
    'ص': 'ص',
    'س': 'س',
    'ش': 'ش',
    'ط': 'ط',
    'ت': 'ت',
    'ة': 'ة',
    'ث': 'ث',
    'و': 'و',
    'ي': 'ي',
    'ز': 'ز',
    'ج': 'ج',
    'ذ': 'ذ',
    'ظ': 'ظ'
};


const images = {
      'Alef.jpg': 'الف',
      'Bah.jpg' : 'باء' ,
      'Teh.jpg': 'تاء' ,
      'Theh.jpg':  'ثاء' , 
      'Jeem.jpg':  'جيم',
      'Haa.jpg':  'حاء' ,
      'Kah.jpg':  'خاء' ,
      'Dal.jpg':  'دال' ,
      'Thel.jpg' :  'ذال', 
      'Rah.jpg': 'راء' ,
      'Zain.jpg':  'زين', 
      'Seen.jpg':  'سين',
      'Sheen.jpg':  'شين',
      'Sad.jpg': 'صاد'   ,  
      'Tah.jpg':  'طاء' ,
      'Dah.jpg':  'ظاء' ,
      'Ain.jpg':  'عين' ,
      'Gain.jpg':  'غين' ,
      'fah.jpg': 'فاء' ,
      'qaf.jpg':  'قاف' ,
      'kaf.jpg':  'كاف' ,
      'lam.jpg':  'لام' ,
      'meem.jpg':  'ميم' ,
      'noon.jpg': 'نون' ,
      'hah.jpg': 'هاء' ,
      'waw.jpg':  'واو' ,
      'yah.jpg' : 'ياء' ,
      'laa.jpg' : 'لا' ,
      'tah_marbuta.jpg': 'تاء مربوطة' ,
      'al.jpg':'ال' ,
      'Dad.jpg': 'ضاد' ,
    


};
