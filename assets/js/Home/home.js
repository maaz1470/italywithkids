window.addEventListener("load", function () {
    setTimeout(() => {
        // Google Font
        const google_font = document.createElement('link');
        google_font.rel = 'stylesheet';
        google_font.href = 'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,700;1,400&family=Noto+Sans+JP:wght@400;500;700;900&display=swap';
        document.head.appendChild(google_font);

        const google_tag_manager = document.createElement('script')
        google_tag_manager.src = 'https://www.googletagmanager.com/gtag/js?id=G-BNQFG674Q0';
        document.head.appendChild(google_tag_manager)


        const google_ads = document.createElement('script');
        google_ads.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7192432760620405';
        google_ads.setAttribute('crossorigin','anonymous')
        this.document.head.appendChild(google_ads)

        

    }, 4000)

    this.setTimeout(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-BNQFG674Q0');
    }, 4200)

    

})