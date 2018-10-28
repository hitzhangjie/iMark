1. Add a flag to indicate whether `Opened Files` is enabled.
   - Actually, users can see which files are opened via the tabs, I think we shouldn't display `Opened Files` always at the top of the sidebar. By default, `Opened Files` feature should be disabled.
   read `flag` and call `document.getElementsByClassName('opened-files')[0].style.display="none"` to hide/show `Opened Files`.
   Now, we just comment out the `Opened Files` div for convenience.
2. 
