var testID = 0;
var obj = {
    "1": {
        "widCreator": createBrowser,
        "id": "Browser"
    },
    "2": {
        "widCreator": createButton,
        "id": "Button"
    },
    "3": {
        "widCreator": createCamera,
        "id": "Camera"
    },
    "4": {
        "widCreator": createCheckBoxGroup,
        "id": "CheckBoxGroup"
    },
    "5": {
        "widCreator": createComboBox,
        "id": "ComboBox"
    },
    "6": {
        "widCreator": createDataGrid,
        "id": "DataGrid"
    },
    "7": {
        "widCreator": createHBox,
        "id": "HBox"
    },
    "8": {
        "widCreator": createHzImageStrip,
        "id": "HzImageStrip"
    },
    "9": {
        "widCreator": createImage,
        "id": "Image"
    },
    "10": {
        "widCreator": createLabel,
        "id": "Label"
    },
    "11": {
        "widCreator": createLine,
        "id": "Line"
    },
    "12": {
        "widCreator": createLink,
        "id": "Link"
    },
    "13": {
        "widCreator": createListBox,
        "id": "ListBox"
    },
    "14": {
        "widCreator": createMap,
        "id": "Map"
    },
    "15": {
        "widCreator": createPhone,
        "id": "Phone"
    },
    "16": {
        "widCreator": createPickerView,
        "id": "PickerView"
    },
    "17": {
        "widCreator": createRadioButton,
        "id": "RadioButton"
    },
    "18": {
        "widCreator": createRichText,
        "id": "RichText"
    },
    "19": {
        "widCreator": createScrollBox,
        "id": "ScrollBox"
    },
    "20": {
        "widCreator": createSegment,
        "id": "Segment"
    },
    "21": {
        "widCreator": createSlider,
        "id": "Slider"
    },
    "22": {
        "widCreator": createSwitch,
        "id": "Switch"
    },
    "23": {
        "widCreator": createTabPane,
        "id": "TabPane"
    },
    "24": {
        "widCreator": createTextArea,
        "id": "TextArea"
    },
    "25": {
        "widCreator": createTextBox,
        "id": "TextBox"
    }
};

function createList() {
    testcases = "TestCases for Widget Alignment" + "\n\n";
    for (index in obj) {
        testcases += index + " : " + obj[index].id + "\n\n";
    }
    formHome.TestCases.text = testcases;
}

function testcaseNavigator() {
    formDyn.destroy();
    formDyn.postShow = null;
    formDyn.preShow = null;
    if (formHome['TestCaseID'].text != null) {
        testID = (formHome['TestCaseID'].text).toString();
    } else {
        alert("TestID is null");
    }
    testID_num = parseInt(testID);
    testObj = obj[testID].widCreator.call();
    testcase(testObj);
    formDyn.skin = "skin1";
    formDyn.show();
}

function nextTestCase() {
    if (alignment != 9) {
        alignment++;
        /*		formDyn.remove("hbox");
		formDyn.remove("refImageWidget");
	    formDyn.remove(obj[testID].id);
	    hbox = createHbox("hbox"); 	        
    	imagewidget = createImage("refImageWidget");
    	hbox.add(testObj, imagewidget);
    	formDyn.add(hbox);
    	*/
        testcaseNavigator();
    } else {
        alignment = 1;
        home();
    }
}

function home() {
    alignment = 1;
    currentForm = kony.application.getCurrentForm();
    formHome.show();
    if (currentForm != formHome) {
        currentForm.destroy();
    }
}