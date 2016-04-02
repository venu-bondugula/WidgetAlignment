function testcase(testObj) {

    hbox = createHbox("hbox");

    try {
        testID_num = parseInt(frmParams.caseID);
        frmParams.frmname.TestCaseTitle.text = obj[(frmParams.caseID).toString()];
    } catch (e) {
        kony.print("Some times expected");
    }
}
