(function(window) {
	// General utilities
	var doc = window.document,
			$ = function(selector) {
				var result = doc.querySelectorAll(selector);
				return (result.length > 1) ? result : result[0];
			};

	Node.prototype.on = Node.prototype.addEventListener;
	NodeList.prototype.on = function(type, func, flag) {
		[].forEach.call(this, function(node, index) {
			node.on(type, func, flag);
		});
	};

	// App related code starts here
	var editorBtn = $('#edit'),
			editForWholePage = $('#editForPage'),
			wholePage = false,
			editor = $('#editor');

	editorBtn.on('click', function(e) {
		e.preventDefault();

		if(editor.isContentEditable) {
			// Disable editing
			editor.contentEditable = 'false';
			editorBtn.innerHTML = 'Enable Editing';

			// Any saving work can be done here
		} else {
			editor.contentEditable = 'true';
			editor.focus()
			editorBtn.innerHTML = 'Disable Editing';
		}
	}, false);

	// For whole page
	editForWholePage.on('click', function(e) {
		e.preventDefault();

		if(!wholePage) {
			// Disable editing
			doc.designMode = 'on';
			wholePage = true;
			editForWholePage.innerHTML = 'Disable Editing for whole page';

			// Any saving work can be done here
		} else {
			doc.designMode = 'off';
			wholePage = false;
			editForWholePage.innerHTML = 'Enable Editing for whole page';
		}
	}, false);

}(this));