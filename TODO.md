1. Add a flag to indicate whether `Opened Files` is enabled.
   - Actually, users can see which files are opened via the tabs, I think we shouldn't display `Opened Files` always at the top of the sidebar. By default, `Opened Files` feature should be disabled.
   read `flag` and call `document.getElementsByClassName('opened-files')[0].style.display="none"` to hide/show `Opened Files`.
   Now, we just comment out the `Opened Files` div for convenience.
2. Sidebar div `right-column` show right border by default.
   - If right border not displayed, users may felt confused where's the border between the project tree and the editor area. Besides, Displaying the border make it easier for positioning the mouse cursor to drag/adjust the sidebar width.
3. Sidebar `open folder` svg icon
   - change it from `icon-create-project` to `icon-folder-open`, the former icon's meaning is more likely to create a new document rather than open a folder.
4. Auto save files when close file by cmd+w shortcut or click close tab. 
   - Popup the dialog to ask for save is useless, unless it shows the content changes. Why not leave it to the Git version control system to control this? I don't need it, I always need it saved.
5. Adjust the sidebar UI, especially div margins, to make it more nice.
6.  
