window.addEventListener("load", function () {

    this.setTimeout(() => {
        // Cookie Consent
        const cookie_consent = document.createElement('script')
        cookie_consent.src = 'assets/js/cookieconsent.min.js';
        document.head.appendChild(cookie_consent)



    }, 3000)

    this.setTimeout(() => {
        window.CookieConsent.init({
            language: {
              current: 'en'
            },
            categories: {
              necessary: {
                needed: true,
                wanted: true,
                checked: true,
                language: {
                  locale: {
                    en: {
                      name: 'Strictly Necessary Cookies',
                      description: 'These cookies are essential to provide you with services available through our website and to enable you to use certain features of our website. Without these cookies, we cannot provide you certain services on our website.',
                    },
                    hu: {
                      name: 'Szükséges sütik',
                      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu commodo est, nec gravida odio. Suspendisse scelerisque a ex nec semper.',
                    }
                  }
                }
              },
              various: {
                needed: false,
                wanted: false,
                checked: false,
                language: {
                  locale: {
                    en: {
                      name: 'Various Cookies',
                      description: 'These cookies are used to collect information to analyze the traffic to our website and how visitors are using our website. For example, these cookies may track things such as how long you spend on the website or the pages you visit which helps us to understand how we can improve our website for you. The information collected through these tracking and performance cookies do not identify any individual visitor..',
                    },
                    hu: {
                      name: 'Egyéb sütik',
                      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu commodo est, nec gravida odio. Suspendisse scelerisque a ex nec semper.',
                    }
                  }
                }
              }
            },
            services: {
              facebook: {
                category: 'various',
                type: 'dynamic-script', // dynamic-script, script-tag, wrapped, localcookie
                search: 'facebook',
                language: {
                  locale: {
                    en: {
                      name: 'Facebook'
                    },
                    hu: {
                      name: 'Facebook'
                    }
                  }
                }
              },
              azalead: {
                category: 'various',
                type: 'script-tag',
                search: 'azalead',
                language: {
                  locale: {
                    en: {
                      name: 'Google Analytics'
                    },
                    hu: {
                      name: 'Azalead'
                    }
                  }
                }
              },
              wrapped: {
                category: 'various',
                type: 'wrapped',
                search: 'wrapped',
                language: {
                  locale: {
                    en: {
                      name: 'Pinterest'
                    },
                    hu: {
                      name: 'Csomagolt süti'
                    }
                  }
                }
              },
              localcookie: {
                category: 'various',
                type: 'localcookie',
                search: 'localcookie',
                language: {
                  locale: {
                    en: {
                      name: 'Instagram'
                    },
                    hu: {
                      name: 'Helyi süti'
                    }
                  }
                }
              }
            }
          });
    }, 3200)

    setTimeout(() => {
        
        // Google Tag Manager
        const google_tag_manager = document.createElement('script')
        google_tag_manager.src = 'https://www.googletagmanager.com/gtag/js?id=G-BNQFG674Q0';
        document.head.appendChild(google_tag_manager)

        // Google Adsense
        const google_ads = document.createElement('script');
        google_ads.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7192432760620405';
        google_ads.setAttribute('crossorigin','anonymous')
        this.document.head.appendChild(google_ads)


        // Facebook
        const facebook = document.createElement('script')
        facebook.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0&appId=1473210180142203';
        facebook.setAttribute('crossorigin','anonymous')
        facebook.setAttribute('nonce','okZew7SJ')
        this.document.head.appendChild(facebook)


        // Bootstrap JS
        const bootstrap_js = document.createElement('script')
        bootstrap_js.src = './assets/js/vendor/bootstrap.min.js'
        this.document.body.appendChild(bootstrap_js);


        // Propper JS
        const propper_js = document.createElement('script')
        propper_js.src = './assets/js/vendor/popper.min.js'
        this.document.body.appendChild(propper_js);


        // Modernizr JS
        const modernizr_js = document.createElement('script')
        modernizr_js.src = './assets/js/vendor/modernizr-3.6.0.min.js'
        this.document.body.appendChild(modernizr_js);


        // Jquery Slick Nav JS
        const jquery_slik_nav = document.createElement('script')
        jquery_slik_nav.src = './assets/js/vendor/jquery.slicknav.js'
        this.document.body.appendChild(jquery_slik_nav);


        // Magnific JS
        const magnific_popup = document.createElement('script')
        magnific_popup.src = './assets/js/vendor/jquery.magnific-popup.js'
        this.document.body.appendChild(magnific_popup);



        // Nice Select JS
        const nice_select = document.createElement('script')
        nice_select.src = './assets/js/vendor/jquery.nice-select.min.js'
        this.document.body.appendChild(nice_select);



        // Way Points JS
        const waypoints_js = document.createElement('script')
        waypoints_js.src = './assets/js/vendor/waypoints.min.js'
        this.document.body.appendChild(waypoints_js);




        // Sticky JS
        const sticky_js = document.createElement('script')
        sticky_js.src = './assets/js/vendor/jquery.sticky.js'
        this.document.body.appendChild(sticky_js);

        

    }, 4000)

    this.setTimeout(() => {
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-BNQFG674Q0');
    }, 4200)


    this.setTimeout(() => {
        // Google Font
        const google_font = document.createElement('link');
        google_font.rel = 'stylesheet';
        google_font.href = 'https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,700;1,400&family=Noto+Sans+JP:wght@400;500;700;900&display=swap';
        document.head.appendChild(google_font);

    },8000)



})