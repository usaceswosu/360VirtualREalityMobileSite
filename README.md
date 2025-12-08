# USACE VR Mobile Site

## Overview
This project is a mobile-friendly web application for the US Army Corps of Engineers (USACE) that allows users to explore specific lakes and trails. Users can view images, watch YouTube videos for each trail, and access additional information through interactive modals.

## Features
- Responsive table of trails by state
- Modal popups for each trail with image carousels and trail lists
- Per-image YouTube video links in modals
- Info icon in the footer with a dedicated help modal
- Bootstrap 5, DataTables, and jQuery integration

## Folder Structure
```
Vr mobile app code/
├── assets/
│   ├── html/
│   │   └── index.html
│   ├── JS/
│   │   └── index.js
│   ├── Stylesheets/
│   │   └── Styles.css
│   └── images/
│       └── ... (lake, trail, info images)
```

## Setup & Usage
1. **Clone or download the repository.**
2. Open `assets/html/index.html` in your browser.
3. Make sure all dependencies are loaded via CDN (Bootstrap, DataTables, jQuery, Bootstrap Icons).
4. To add or update lakes, trails, images, or videos, edit the data attributes in the HTML table.
5. To customize styles, edit `assets/Stylesheets/Styles.css`.

## Customization
- **Add new lakes/trails:**
    - Update the table in `index.html` with new `<a class="lake-link">` or `<a class="trail-link">` entries.
    - Use `data-images`, `data-image-names`, and `data-video-urls` attributes for dynamic modal content.
- **Info Modal:**
    - Edit the modal with id `infoModal` in `index.html` to update help text or images.
- **Images:**
    - Place new images in the `assets/images/` directory and reference them in the HTML.

## Technologies Used
- HTML5, CSS3, JavaScript (ES6)
- Bootstrap 5
- jQuery
- DataTables
- Bootstrap Icons

## Credits
- US Army Corps of Engineers (USACE)
- Bootstrap, DataTables, jQuery, Bootstrap Icons
- SWOSU Students: Ann Groicher, Dillon Martinez, Matthew Miller, and Sky Jones

## License
This project is for educational and demonstration purposes only