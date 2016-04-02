function testcase(frmParams, obj) {
    radbtn = createradioButton("radbtn");
    hbox = createHbox("hbox");
    lblresult = createLabel("lblresult");
    switch (frmParams.caseID) {
    case "0":
    case "5":
        // Label for result is already created
        lblresult.text = "iD = " + radbtn.id;
        hbox.add(radbtn);
        frmParams.frmname.add(hbox, lblresult);
        break;
    case "1":
        frmParams.frmname = frmRender;
        break;
    case "2":
        frmParams.frmname = frmRadioButton;
        frmParams.frmname.label210923221657040.isVisible = true;
        break;
    case "3":
        // Hbox is already created
        // Label for result is already created
        actnbtn = createActionButton("click here to toggle the visibility of radio button", radiobutton_isVisible);
        hbox.add(actnbtn, lblresult);
        frmParams.frmname.add(radbtn, hbox);
        break;
    case "4":
    case "10":
        frmParams.frmname = frmRadioButton;
        frmParams.frmname.actnbtn.text = "click here to read the master data set through IDE";
        frmParams.frmname.label210923221657040.isVisible = false;
        frmParams.frmname.actnbtn.onClick = radiobutton_masterData;
        break;
    case "6":
        actnbtn = createActionButton("click here to set masterdata through code", radiobutton_masterData_code);
        // Hbox is already created
        // Label for result is already created
        hbox.add(actnbtn, lblresult);
        frmParams.frmname.add(radbtn, hbox);
        break;
    case "7":
        radbtn.masterData = [
            ["", "rad1"],
            ["2", "rad2"],
            ["3", "rad3"]
        ];
        actnbtn = createActionButton("click here to read masterdata", radiobutton_masterData);
        // Hbox is already created
        // Label for result is already created
        hbox.add(actnbtn, lblresult);
        frmParams.frmname.add(radbtn, hbox);
        break;
    case "8":
        frmParams.frmname.add(radbtn);
        frmParams.frmname.radbtn.masterData = [
            ["1", ""],
            ["2", "rad2"],
            ["3", "rad3"]
        ];
        actnbtn = createActionButton("click here to read masterdata", radiobutton_masterData);
        // Hbox is already created
        // Label for result is already created
        hbox.add(actnbtn, lblresult);
        frmParams.frmname.add(radbtn, hbox);
        break;
    case "9":
        frmParams.frmname.add(radbtn, lblresult);
        try {
            frmParams.frmname.radbtn.marginInPixel = false;
        } catch (e) {
            frmParams.frmname.lblresult.text = "marginInPixel is readOnly property";
        }
        break;
    case "11":
        actnbtn = createActionButton("click here for the data of radiobutton using master data map", radiobutton_masterdatamap);
        hbox.add(actnbtn, lblresult);
        radbtn.masterDataMap = [
            [{
                "key": "1",
                "value": "Studio"
            }, {
                "key": "2",
                "value": "Mobile Fabric"
            }, {
                "key": "3",
                "value": "Master DataMap"
            }], "key", "value"];
        frmParams.frmname.add(radbtn, hbox);
        break;
    case "12":
        frmParams.frmname = frmRadioBtnOrientation;
        frmParams.frmname.label210923221656859.setVisibility(false);
        frmParams.frmname.radiobuttongroup210923221656860.setVisibility(false);
        break;
    case "13":
        frmParams.frmname = frmRadioBtnOrientation;
        frmParams.frmname.label210923221656859.setVisibility(true);
        frmParams.frmname.radiobuttongroup210923221656860.setVisibility(true);
        frmParams.frmname.label210923221656857.setVisibility(false);
        frmParams.frmname.radiobuttongroup210923221656858.setVisibility(false);
        break;
    case "14":
        frmParams.frmname = frmRadioButton;
        frmParams.frmname.hbox.setVisibility(false);
        break;
    case "15":
        frmParams.frmname = frmRadioButton;
        frmParams.frmname.actnbtn.text = "click here to read the skin";
        frmParams.frmname.actnbtn.onClick = radiobutton_skin;
        break;
    case "16":
    case "17":
    case "18":
        frmParams.frmname = frmRadioButton;
        frmParams.frmname.actnbtn.text = "click to modify the skin";
        frmParams.frmname.actnbtn.onClick = radiobutton_modifyskin;
        var label1 = createLabel("label1");
        label1.text = "RadioButton with vertical gradient colour to the background";
        frmParams.frmname.add(label1);
        var radbtn1 = createradioButton("radbtn1");
        radbtn1.skin = "radbtnvgskn";
        frmParams.frmname.add(radbtn1);
        var label2 = createLabel("label2");
        label2.text = "RadioButton with vertical split colour to the background";
        frmParams.frmname.add(label2);
        var radbtn2 = createradioButton("radbtn2");
        radbtn2.skin = "radbtnvsskn";
        frmParams.frmname.add(radbtn2);
        break;
    case "19":
    case "20":
        label = createLabel("label1");
        label.text = "Applying large image to the background";
        frmParams.frmname.add(label);
        radbtn.masterData = [
            ["1", "rad1"],
            ["2", "rad2"]
        ];
        radbtn.skin = "largeimg";
        frmParams.frmname.add(radbtn);
        label = createLabel("label2");
        label.text = "Applying small image to the background";
        frmParams.frmname.add(label);
        radbtn = createradioButton("radbtn1");
        radbtn.masterData = [
            ["1", "rad1"],
            ["2", "rad2"]
        ];
        radbtn.skin = "smallimg";
        frmParams.frmname.add(radbtn);
        break;
    case "21":
    case "22":
    case "23":
    case "24":
        var label = createLabel("label1");
        label.text = "RadioButton with rounded Border";
        frmParams.frmname.add(label);
        radbtn.masterData = [
            ["1", "rad1"],
            ["2", "rad2"]
        ];
        radbtn.skin = "Border";
        frmParams.frmname.add(radbtn);
        label = createLabel("label2");
        label.text = "RadioButton with plain Border";
        frmParams.frmname.add(label);
        radbtn.masterData = [
            ["1", "rad1"],
            ["2", "rad2"]
        ];
        radbtn = createradioButton("radbtn1");
        radbtn.skin = "Borderplain";
        frmParams.frmname.add(radbtn);
        label = createLabel("label3");
        label.text = "RadioButton with large font";
        frmParams.frmname.add(label);
        radbtn = createradioButton("radbtn2");
        radbtn.masterData = [
            ["1", "rad1"],
            ["2", "rad2"]
        ];
        radbtn.skin = "Lfont";
        frmParams.frmname.add(radbtn);
        label = createLabel("label4");
        label.text = "RadioButton with small font";
        frmParams.frmname.add(label);
        radbtn = createradioButton("radbtn3");
        radbtn.masterData = [
            ["1", "rad1"],
            ["2", "rad2"]
        ];
        radbtn.skin = "Sfont";
        frmParams.frmname.add(radbtn);
        break;
    case "25":
    case "26":
    case "27":
        radbtn.focusSkin = "rbn";
        actnbtn = createActionButton("click to read the focus skin", radiobutton_focusskin);
        actnbtn1 = createButton("actnbtn1");
        actnbtn1.text = "click to write focus skin";
        actnbtn1.onClick = radiobutton_focusskin_write;
        // Label for result is already created
        // Hbox is already created
        hbox.add(actnbtn, lblresult);
        frmParams.frmname.add(radbtn, hbox, actnbtn1);
        break;
    case "28":
        radbtn.skin = "tran";
        frmParams.frmname.add(radbtn);
        break;
    case "29":
        radbtn.selectedKey = "1";
        frmParams.frmname.add(radbtn);
        break;
    case "30":
        actnbtn = createActionButton("click to read the selectedKey", radiobutton_selectedKey);
        // Label for result is already created
        // Hbox is already created
        hbox.add(actnbtn, lblresult);
        frmParams.frmname.add(radbtn, hbox);
        break;
    case "31":
        radbtn.selectedKey = null;
        actnbtn = createActionButton("click to read the selectedKey", radiobutton_selectedKey);
        // Label for result is already created
        // Hbox is already created
        lblresult.text = "Default value set for selectedKey is null";
        hbox.add(actnbtn, lblresult);
        frmParams.frmname.add(radbtn, hbox);
        break;
    case "32":
        actnbtn = createActionButton("click to read the properties", readproperties);
        hbox.add(actnbtn, lblresult);
        frmParams.frmname.add(radbtn, hbox);
        break;
    case "33":
    case "34":
        actnbtn = createActionButton("click to read the selectedValue", radiobutton_selectedValue);
        // Label for result is already created
        // Hbox is already created
        hbox.add(actnbtn, lblresult);
        frmParams.frmname.add(radbtn, hbox);
        break;
    case "35":
        actnbtn = createActionButton("click here to dynamically change masterData with deault selected value", radiobutton_masterData_selectedvalue);
        hbox.add(actnbtn, lblresult);
        frmParams.frmname.add(radbtn, hbox);
        break;
    case "36":
        actnbtn = createActionButton("click here to use setVisibility API", radiobutton_setVisibility);
        // Label for result is already created
        // Hbox is already created
        hbox.add(actnbtn, lblresult);
        frmParams.frmname.add(radbtn, hbox);
        break;
    case "37":
        actnbtn = createActionButton("setEnable = true", radiobutton_setEnable_true);
        btn = createButton("btn");
        btn.skin = "actnskn";
        btn.text = "setEnable = false";
        btn.onClick = radiobutton_setEnable_false;
        // Hbox is already created
        radbtn.onSelection = callback;
        hbox.add(actnbtn, btn);
        frmParams.frmname.add(radbtn, hbox);
        break;
    case "38":
        actnbtn = createActionButton("click here to use setFocus API", radiobutton_setFocus);
        frmParams.frmname.add(actnbtn);
        nonScreenLevelSegment();
        frmParams.frmname.add(radbtn);
        break;
    case "39":
        radiobuttonParams.widgetAlignment = constants.WIDGET_ALIGN_TOP_LEFT;
        radiobuttonParams.hExpand = false;
        radiobuttonParams.vExpand = false;
        radiobuttonParams.masterData = [
            ["1", "rad1"],
            ["2", "rad2"],
            ["3", "rad3"]
        ];
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        // Hbox is already created
        imagewidget = createImage("imagewidget");
        hbox.add(radbtn, imagewidget);
        frmParams.frmname.add(hbox);
        break;
    case "40":
        radiobuttonParams.widgetAlignment = constants.WIDGET_ALIGN_TOP_CENTER;
        radiobuttonParams.viewType = constants.RADIOGROUP_VIEW_TYPE_TABLEVIEW;
        radiobuttonParams.hExpand = false;
        radiobuttonParams.masterData = [
            ["1", "rad1"],
            ["2", "rad2"],
            ["3", "rad3"]
        ];
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        // Hbox is already created
        imagewidget = createImage("imagewidget");
        hbox.add(radbtn, imagewidget);
        frmParams.frmname.add(hbox);
        break;
    case "41":
        radiobuttonParams.widgetAlignment = constants.WIDGET_ALIGN_TOP_RIGHT;
        radiobuttonParams.viewType = constants.RADIOGROUP_VIEW_TYPE_TABLEVIEW;
        radiobuttonParams.hExpand = false;
        radiobuttonParams.masterData = [
            ["1", "rad1"],
            ["2", "rad2"],
            ["3", "rad3"]
        ];
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        // Hbox is already created
        imagewidget = createImage("imagewidget");
        hbox.add(radbtn, imagewidget);
        frmParams.frmname.add(hbox);
        break;
    case "42":
        radiobuttonParams.widgetAlignment = constants.WIDGET_ALIGN_MIDDLE_LEFT;
        radiobuttonParams.viewType = constants.RADIOGROUP_VIEW_TYPE_TABLEVIEW;
        radiobuttonParams.hExpand = false;
        radiobuttonParams.masterData = [
            ["1", "rad1"],
            ["2", "rad2"],
            ["3", "rad3"]
        ];
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        // Hbox is already created
        imagewidget = createImage("imagewidget");
        hbox.add(radbtn, imagewidget);
        frmParams.frmname.add(hbox);
        break;
    case "43":
        radiobuttonParams.widgetAlignment = constants.WIDGET_ALIGN_CENTER;
        radiobuttonParams.viewType = constants.RADIOGROUP_VIEW_TYPE_TABLEVIEW;
        radiobuttonParams.hExpand = false;
        radiobuttonParams.masterData = [
            ["1", "rad1"],
            ["2", "rad2"],
            ["3", "rad3"]
        ];
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        // Hbox is already created
        imagewidget = createImage("imagewidget");
        hbox.add(radbtn, imagewidget);
        frmParams.frmname.add(hbox);
        break;
    case "44":
        radiobuttonParams.widgetAlignment = constants.WIDGET_ALIGN_MIDDLE_RIGHT;
        radiobuttonParams.viewType = constants.RADIOGROUP_VIEW_TYPE_TABLEVIEW;
        radiobuttonParams.hExpand = false;
        radiobuttonParams.masterData = [
            ["1", "rad1"],
            ["2", "rad2"],
            ["3", "rad3"]
        ];
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        // Hbox is already created
        imagewidget = createImage("imagewidget");
        hbox.add(radbtn, imagewidget);
        frmParams.frmname.add(hbox);
        break;
    case "45":
        radiobuttonParams.widgetAlignment = constants.WIDGET_ALIGN_BOTTOM_LEFT;
        radiobuttonParams.viewType = constants.RADIOGROUP_VIEW_TYPE_TABLEVIEW;
        radiobuttonParams.hExpand = false;
        radiobuttonParams.masterData = [
            ["1", "rad1"],
            ["2", "rad2"],
            ["3", "rad3"]
        ];
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        // Hbox is already created
        imagewidget = createImage("imagewidget");
        hbox.add(radbtn, imagewidget);
        frmParams.frmname.add(hbox);
        break;
    case "46":
        radiobuttonParams.widgetAlignment = constants.WIDGET_ALIGN_BOTTOM_CENTER;
        radiobuttonParams.viewType = constants.RADIOGROUP_VIEW_TYPE_TABLEVIEW;
        radiobuttonParams.hExpand = false;
        radiobuttonParams.masterData = [
            ["1", "rad1"],
            ["2", "rad2"],
            ["3", "rad3"]
        ];
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        // Hbox is already created
        imagewidget = createImage("imagewidget");
        hbox.add(radbtn, imagewidget);
        frmParams.frmname.add(hbox);
        break;
    case "47":
        radiobuttonParams.widgetAlignment = constants.WIDGET_ALIGN_BOTTOM_RIGHT;
        radiobuttonParams.viewType = constants.RADIOGROUP_VIEW_TYPE_TABLEVIEW;
        radiobuttonParams.hExpand = false;
        radiobuttonParams.masterData = [
            ["1", "rad1"],
            ["2", "rad2"],
            ["3", "rad3"]
        ];
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        // Hbox is already created
        imagewidget = createImage("imagewidget");
        hbox.add(radbtn, imagewidget);
        frmParams.frmname.add(hbox);
        break;
    case "48":
        // Hbox is already created
        radbtn.margin = [5, 5, 5, 5];
        hbox.add(radbtn);
        frmParams.frmname.add(hbox);
        break;
    case "49":
        vbox = createVbox("vbox");
        // Hbox is already created
        vbox.add(radbtn);
        hbox.add(vbox);
        frmParams.frmname.add(hbox);
        break;
    case "50":
        vbox = createVbox("vbox");
        // Hbox is already created
        radbtn.margin = [5, 5, 5, 5];
        vbox.add(radbtn);
        hbox.add(vbox);
        frmParams.frmname.add(hbox);
        break;
    case "51":
        // Hbox is already created
        hbox.add(radbtn);
        frmParams.frmname.add(hbox);
        break;
    case "52":
        radbtn.margin = [5, 5, 5, 5];
        frmParams.frmname.add(radbtn);
        break;
    case "53":
        frmParams.frmname.add(radbtn);
        break;
    case "54":
    case "55":
        radiobuttonParams.itemOrientation = constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL;
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        radbtn.margin = [5, 5, 5, 5];
        // Hbox is already created
        hbox.add(radbtn);
        frmParams.frmname.add(hbox);
        hbox1 = createHbox("hbox1");
        // Label for result is already created
        actnbtn = createActionButton("Click to read margin", radiobutton_margin);
        hbox1.add(actnbtn, lblresult);
        btn1 = createButton("btn1");
        btn1.text = "click here to change margin";
        btn1.onClick = radiobutton_margin_write;
        frmParams.frmname.add(hbox, hbox1, btn1);
        break;
    case "56":
    case "57":
        radiobuttonParams.itemOrientation = constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL;
        radiobuttonParams.hExpand = true;
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        radbtn.margin = [5, 5, 5, 5];
        // Hbox is already created
        hbox.add(radbtn);
        frmParams.frmname.add(hbox);
        hbox1 = createHbox("hbox1");
        // Label for result is already created
        actnbtn = createActionButton("Click to read margin", radiobutton_margin);
        btn1 = createButton("btn1");
        btn1.text = "click here to change margin";
        btn1.onClick = radiobutton_margin_write;
        hbox1.add(actnbtn, lblresult);
        frmParams.frmname.add(hbox, hbox1, btn1);
        break;
    case "58":
        vbox = createVbox("vbox");
        // Hbox is already created
        radiobuttonParams.marginInPixel = true;
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        radbtn.margin = [40, 40, 40, 40];
        vbox.add(radbtn);
        hbox.add(vbox);
        frmParams.frmname.add(hbox);
        break;
    case "59":
        // Hbox is already created
        radiobuttonParams.marginInPixel = true;
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        radbtn.margin = [40, 40, 40, 40];
        hbox.add(radbtn);
        frmParams.frmname.add(hbox);
        break;
    case "60":
        radiobuttonParams.marginInPixel = true;
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        radbtn.margin = [40, 40, 40, 40];
        frmParams.frmname.add(radbtn);
        break;
    case "61":
    case "62":
        radiobuttonParams.itemOrientation = constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL;
        radiobuttonParams.marginInPixel = true;
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        radbtn.margin = [10, 10, 10, 10];
        // Hbox is already created
        hbox.add(radbtn);
        frmParams.frmname.add(hbox);
        hbox1 = createHbox("hbox1");
        // Label for result is already created
        actnbtn = createActionButton("Click to read margin", radiobutton_margin);
        btn1 = createButton("btn1");
        btn1.text = "click here to change margin";
        btn1.onClick = radiobutton_margin_writePX;
        hbox1.add(actnbtn, lblresult);
        frmParams.frmname.add(hbox, hbox1, btn1);
        break;
    case "63":
    case "64":
        radiobuttonParams.itemOrientation = constants.RADIOGROUP_ITEM_ORIENTATION_HORIZONTAL;
        radiobuttonParams.hExpand = true;
        radiobuttonParams.marginInPixel = true;
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        radbtn.margin = [10, 10, 10, 10];
        // Hbox is already created
        hbox.add(radbtn);
        frmParams.frmname.add(hbox);
        hbox1 = createHbox("hbox1");
        // Label for result is already created
        actnbtn = createActionButton("Click to read margin", radiobutton_margin);
        btn1 = createButton("btn1");
        btn1.text = "click here to change margin";
        btn1.onClick = radiobutton_margin_writePX;
        hbox1.add(actnbtn, lblresult);
        frmParams.frmname.add(hbox, hbox1, btn1);
        break;
    case "65":
        // Hbox is already created
        radbtn.padding = [10, 10, 10, 10];
        radbtn.margin = [4, 4, 4, 4];
        hbox.add(radbtn);
        frmParams.frmname.add(hbox);
        break;
    case "66":
        vbox = createVbox("vbox");
        // Hbox is already created
        vbox.add(radbtn);
        hbox.add(vbox);
        frmParams.frmname.add(hbox);
        break;
    case "67":
        vbox = createVbox("vbox");
        // Hbox is already created
        radbtn.padding = [10, 10, 10, 10];
        vbox.add(radbtn);
        hbox.add(vbox);
        frmParams.frmname.add(hbox);
        break;
    case "68":
        // Hbox is already created
        hbox.add(radbtn);
        frmParams.frmname.add(hbox);
        break;
    case "69":
        radbtn.padding = [10, 10, 10, 10];
        frmParams.frmname.add(radbtn);
        break;
    case "70":
        frmParams.frmname.add(radbtn);
        break;
    case "71":
    case "72":
        radiobuttonParams.itemOrientation = constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL;
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        radbtn.padding = [10, 10, 10, 10];
        // Hbox is already created
        hbox.add(radbtn);
        frmParams.frmname.add(hbox);
        hbox1 = createHbox("hbox1");
        // Label for result is already created
        actnbtn = createActionButton("Click to read padding", radiobutton_padding);
        btn1 = createButton("btn1");
        btn1.text = "click here to change padding";
        btn1.onClick = radiobutton_padding_write;
        hbox1.add(actnbtn, lblresult);
        frmParams.frmname.add(hbox, hbox1, btn1);
        break;
    case "73":
        radiobuttonParams.paddingInPixel = true;
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        vbox = createVbox("vbox");
        // Hbox is already created
        radbtn.padding = [40, 40, 40, 40];
        vbox.add(radbtn);
        hbox.add(vbox);
        frmParams.frmname.add(hbox);
        break;
    case "74":
        // Hbox is already created
        radiobuttonParams.paddingInPixel = true;
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        radbtn.padding = [40, 40, 40, 40];
        hbox.add(radbtn);
        frmParams.frmname.add(hbox);
        break;
    case "75":
        radiobuttonParams.paddingInPixel = true;
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        radbtn.padding = [40, 40, 40, 40];
        frmParams.frmname.add(radbtn);
        break;
    case "76":
        rdID = createRadioButtonWithParams(radiobuttonParams);
        frmParams.frmname.add(rdID);
        break;
    case "77":
        radiobuttonParams.hExpand = true;
        radiobuttonParams.vExpand = false;
        radiobuttonParams.itemOrientation = constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL;
        imagewidget = createImage("imagewidget");
        imagewidget.src = "white.png";
        rdID = createRadioButtonWithParams(radiobuttonParams);
        // Hbox is already created
        hbox.add(rdID, imagewidget);
        frmParams.frmname.add(hbox);
        break;
    case "78":
        radiobuttonParams.hExpand = false;
        radiobuttonParams.vExpand = true;
        radiobuttonParams.itemOrientation = constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL;
        imagewidget = createImage("imagewidget");
        imagewidget.src = "white.png";
        rdID = createRadioButtonWithParams(radiobuttonParams);
        // Hbox is already created
        hbox.add(rdID, imagewidget);
        frmParams.frmname.add(hbox);
        break;
    case "79":
        radiobuttonParams.hExpand = false;
        radiobuttonParams.vExpand = false;
        radiobuttonParams.itemOrientation = constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL;
        imagewidget = createImage("imagewidget");
        imagewidget.src = "white.png";
        rdID = createRadioButtonWithParams(radiobuttonParams);
        // Hbox is already created
        hbox.add(rdID, imagewidget);
        frmParams.frmname.add(hbox);
        break;
    case "80":
    case "81":
    case "82":
        radiobuttonParams.viewType = constants.RADIOGROUP_VIEW_TYPE_TABLEVIEW;
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        radbtn.onSelection = radiobutton_changeImage;
        imagewidget = createImage("imagewidget");
        imagewidget.src = null;
        // Hbox is already created
        hbox.add(radbtn, imagewidget);
        frmParams.frmname.add(hbox);
        break;
    case "83":
        pop1.show();
        break;
    case "84":
        //i18
        break;
    case "85":
    case "86":
    case "87":
    case "88":
    case "91":
        frmParams.frmname = frmIphonePSP;
        break;
    case "89":
    case "90":
        radiobuttonParams.selectedKey = undefined;
        radbtn = createRadioButtonWithParams(radiobuttonParams);
        actnbtn = createActionButton("Click here to change the placeHolder", radiobutton_placeHolder);
        radbtn.placeholder = "Kony India";
        frmParams.frmname.add(radbtn, actnbtn);
        break;
    case "92":
    case "93":
    case "94":
    case "95":
    case "96":
    case "97":
        frmParams.frmname = frmToggleView;
        break;
    case "98":
    case "99":
    case "100":
    case "101":
    case "102":
    case "103":
    case "104":
        frmParams.frmname = frmView;
        break;
    case "105":
    case "106":
    case "107":
    case "110":
        //Ticked and unTicked
        break;
    case "108":
        //hover skin
        break;
    case "109":
        //Tool tip
        break;
    case "111":
        radbtn.skin = "BRToBottom";
        frmParams.frmname.add(radbtn);
        break;
    case "112":
        radbtn.skin = "BRToTop";
        frmParams.frmname.add(radbtn);
        break;
    case "113":
        radbtn.skin = "BRToRight";
        frmParams.frmname.add(radbtn);
        break;
    case "114":
        radbtn.skin = "BRToLeft";
        frmParams.frmname.add(radbtn);
        break;
    case "115":
        radbtn.skin = "BR90deg3colors";
        frmParams.frmname.add(radbtn);
        break;
    case "116":
        radbtn.skin = "BGToBottom";
        radbtn.focusSkin = "BGToTop";
        frmParams.frmname.add(radbtn);
        break;
    case "117":
        radbtn.skin = "BGToTop";
        radbtn.focusSkin = "BGToBottom";
        frmParams.frmname.add(radbtn);
        break;
    case "118":
        radbtn.skin = "BGToRight";
        radbtn.focusSkin = "BGToLeft";
        frmParams.frmname.add(radbtn);
        break;
    case "119":
        radbtn.skin = "BGToLeft";
        radbtn.focusSkin = "BGToRight";
        frmParams.frmname.add(radbtn);
        break;
    case "120":
        radbtn.skin = "BG90deg3colors";
        frmParams.frmname.add(radbtn);
        break;
    case "121":
        radbtn.onSelection = radiobutton_msgskn;
        frmParams.frmname.add(radbtn);
        break;
    case "122":
        radbtn.skin = "Shdw10inner";
        frmParams.frmname.add(radbtn);
        break;
    case "123":
        radbtn.skin = "Shdw10outer";
        frmParams.frmname.add(radbtn);
        break;
    case "124":
        lblresult.text = "Text Shadow is not applicable";
        frmParams.frmname.add(lblresult);
        break;
    case "125":
        radbtn.skin = "BR";
        frmParams.frmname.add(radbtn);
        break;
    case "126":
        frmParams.frmname.add(radbtn);
        frmParams.frmname.preShow = radiobutton_hivo_false;
        break;
    case "127":
        frmParams.frmname.add(radbtn);
        frmParams.frmname.preShow = radiobutton_hivo_true;
        break;
    case "128":
        actnbtn = createActionButton("Set hideInputViewOnOrientationChange = false", radiobutton_hivo_false);
        btn1 = createButton("btn1");
        btn1.text = "Set hideInputViewOnOrientationChange = true";
        btn1.skin = "actnskn";
        btn1.onClick = radiobutton_hivo_true;
        frmParams.frmname.add(radbtn, actnbtn, btn1);
        break;
    case "129":
        frmParams.frmname = frmAlias;
        break;
    case "130":
        frmParams.frmname.add(radbtn);
        break;
    case "131":
        hsb = createHScrollbox("hsb");
        hsb.add(radbtn);
        actnbtn = createActionButton("Set hideInputViewOnOrientationChange = false", radiobutton_hivo_false);
        btn1 = createButton("btn1");
        btn1.text = "Set hideInputViewOnOrientationChange = true";
        btn1.skin = "actnskn";
        btn1.onClick = radiobutton_hivo_true;
        frmParams.frmname.add(hsb, actnbtn, btn1);
        break;
    }
    try {
        testID_num = parseInt(frmParams.caseID);
        frmParams.frmname.TestCaseTitle.text = obj[(frmParams.caseID).toString()];
    } catch (e) {
        kony.print("Some times expected");
    }
    return frmParams;
}
radiobuttonParams = {
    "id": "radbtn",
    "isVisible": true,
    "masterData": [
        ["1", "Studio"],
        ["2", "Mobile Fabric"],
        ["3", "Visualizer"]
    ],
    "selectedKey": 1,
    "skin": "radbtnskn",
    "focusSkin": "rbn",
    "margin": [0, 0, 0, 0],
    "padding": [0, 0, 0, 0],
    "itemOrientation": constants.RADIOGROUP_ITEM_ORIENTATION_VERTICAL,
    "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT,
    "viewType": constants.RADIOGROUP_VIEW_TYPE_LISTVIEW,
    "vExpand": true,
    "hExpand": true,
    "placeholder": "Kony India",
    "paddingInPixel": false,
    "containerWeight": 100,
    "marginInPixel": false
};