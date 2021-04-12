const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
    if (user) {
        //Account info
        db.collection('users').doc(user.uid).get().then(doc => {
            const html = `
                <div>Logged in as ${user.email}</div>
                <div>${doc.data().bio}</div>
            `;
            accountDetails.innerHTML = html;
        });

        //Toggle UI Elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
    } else {
        //Hide account details
        accountDetails.innerHTML = '';

        //Toggle UI Elements
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'block');
    };
};

//Setup Guides
const setupGuides = (data) => {
    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const guide = doc.data();
            const li = `
            <li>
                <div class="collapsible-header grey lighten-4">${guide.title}</div>
                <div class="collapsible-body white">${guide.content}</div>
            </li>
        `;
            html += li;
        });

        guideList.innerHTML = html;
    } else {
        guideList.innerHTML = `<h4 class="center-align">Login to view coding guides</h4>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr;">

            <iframe style="width:120px;height:240px;float: right; margin: 10px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=aryudev-21&marketplace=amazon&amp;region=IN&placement=8194815010&asins=8194815010&linkId=1df9456d1c19684d75b690232fe7f93a&show_border=true&link_opens_in_new_window=false&price_color=454040&title_color=3a88d1&bg_color=ffffff"></iframe>

            <iframe style="width:120px;height:240px;float: right; margin: 10px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//ws-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=IN&source=ac&ref=tf_til&ad_type=product_link&tracking_id=aryudev-21&marketplace=amazon&amp;region=IN&placement=0190123281&asins=0190123281&linkId=dce1209d3be27de5975a8b79b60f3b6a&show_border=true&link_opens_in_new_window=false&price_color=454040&title_color=3a88d1&bg_color=ffffff"></iframe>
    
            </div>`;
    }    
};

// setup materialize components
document.addEventListener('DOMContentLoaded', function () {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);

    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
});
