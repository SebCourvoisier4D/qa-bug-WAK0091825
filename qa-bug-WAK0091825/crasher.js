describe("My test", function () {
	
	it("is expected to open the 'resource.txt' file", function () {
		expect(currentProjectBasePath).to.not.be.an('undefined');
		var myFile = new studio.File(currentProjectBasePath + 'resource.txt');
		expect(myFile).to.be.an('object');
		expect(myFile).to.have.property('exists');
		expect(myFile.exists).to.be.true;
		studio.openFile(myFile);
		var documentPath = studio.currentEditor.getEditingFile().path;
		expect(documentPath).to.equal(myFile.path);
	});
	
	it("is NOT expected to crash", function () {
		studio.currentEditor.selectByLineIndex(0, 0, 0, 10, true);
	});
	
});