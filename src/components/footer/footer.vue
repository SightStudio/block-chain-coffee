<template>
  <footer class="flex-rw">
    <!-- <ul class="footer-list-top">
      <li>
        <h4 class="footer-list-header">About Pavilion</h4>
      </li>
      <li><a href='/shop/about-mission' class="generic-anchor footer-list-anchor" itemprop="significantLink">GET TO KNOW
          US</a></li>
      <li><a href='/promos.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">PROMOS</a></li>
      <li><a href='/retailers/new-retailers.html' class="generic-anchor footer-list-anchor"
          itemprop="significantLink">BECOME A RETAILER</a></li>

      <li><a href='/job-openings.html' itemprop="significantLink" class="generic-anchor footer-list-anchor">JOB
          OPENINGS</a></li>

      <li><a href='/shop/about-show-schedule' class="generic-anchor footer-list-anchor"
          itemprop="significantLink">EVENTS</a></li>
    </ul>
    <ul class="footer-list-top">
      <li>
        <h4 class="footer-list-header">The Gift Selection</h4>
      </li>


      <li><a href='/Angels/cat/id/70' class="generic-anchor footer-list-anchor">ANGEL FIGURINES</a></li>
      <li><a href='/Home-Decor/cat/id/64' class="generic-anchor footer-list-anchor">HOME DECOR</a></li>
      <li><a href='/Mugs/cat/id/32' class="generic-anchor footer-list-anchor">MUGS</a></li>
      <li><a href='/Pet-Lover/cat/id/108' class="generic-anchor footer-list-anchor">PET LOVER</a></li>
      <li><a href='/Ladies-Accessories/cat/id/117' class="generic-anchor footer-list-anchor" target="_blank">HANDBAGS &
          JEWELRY</a></li>
    </ul>
    <ul class="footer-list-top">
      <li id='help'>
        <h4 class="footer-list-header">Please Help Me</h4>
      </li>
      <li><a href='/shop/about-contact' class="generic-anchor footer-list-anchor" itemprop="significantLink">CONTACT</a>
      </li>
      <li><a href='/faq.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">FAQ</a></li>
      <li id='find-a-store'><a href='/shop/store-locator' class="generic-anchor footer-list-anchor"
          itemprop="significantLink">STORE LOCATOR</a></li>
      <li id='user-registration'><a href='/shop/user-registration?URL=' class="generic-anchor footer-list-anchor"
          itemprop="significantLink">NEW USERS</a></li>
      <li id='order-tracking'><a href='/shop/order-status' itemprop="significantLink"
          class="generic-anchor footer-list-anchor">ORDER STATUS</a></li>
    </ul>
    <section class="footer-social-section flex-rw">
      <span class="footer-social-overlap footer-social-connect">
        CONNECT <span class="footer-social-small">with</span> US
      </span>
      <span class="footer-social-overlap footer-social-icons-wrapper">
        <a href="https://www.pinterest.com/paviliongift/" class="generic-anchor" target="_blank" title="Pinterest"
          itemprop="significantLink"><i class="fa fa-pinterest"></i></a>
        <a href="https://www.facebook.com/paviliongift" class="generic-anchor" target="_blank" title="Facebook"
          itemprop="significantLink"><i class="fa fa-facebook"></i></a>
        <a href="https://twitter.com/PavilionGiftCo" class="generic-anchor" target="_blank" title="Twitter"
          itemprop="significantLink"><i class="fa fa-twitter"></i></a>
        <a href="http://instagram.com/paviliongiftcompany" class="generic-anchor" target="_blank" title="Instagram"
          itemprop="significantLink"><i class="fa fa-instagram"></i></a>
        <a href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg" class="generic-anchor" target="_blank"
          title="Youtube" itemprop="significantLink"><i class="fa fa-youtube"></i></a>
        <a href="https://plus.google.com/+Paviliongift/posts" class="generic-anchor" target="_blank" title="Google Plus"
          itemprop="significantLink"><i class="fa fa-google-plus"></i></a>
      </span>
    </section>
    <section class="footer-bottom-section flex-rw">
      <div class="footer-bottom-wrapper">
        <i class="fa fa-copyright" role="copyright">

        </i> 2019 Pavilion in <address class="footer-address" role="company address">Bergen, NY</address><span
          class="footer-bottom-rights"> - All Rights Reserved - </span>
      </div>
      <div class="footer-bottom-wrapper">
        <a href="/terms-of-use.html" class="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html"
          class="generic-anchor" rel="nofollow">Privacy</a>
      </div>
    </section> -->
  </footer>
</template>

<script>
export default {
  data () { return {} }, 
}
</script>

<style lang="scss" scoped>
$primary-light-blue: #8DB9ED;
$primary-line-color: #ccc;


ul {
  list-style: none
}

a {
  text-decoration: none
}

.generic-anchor {
  color: $primary-light-blue;

  &:visited {
    color: $primary-light-blue
  }

  &:hover {
    color: $primary-line-color
  }
}

.flex-rw {
  display: flex;
  flex-flow: row wrap;
}

//This main is mostly to push the footer to the bottom and for demo purposes.
main {
  flex: 1 1 auto; //For IE11
  display: flex;
  align-items: center;
  justify-content: center;
  font: 5em "Oswald", sans-serif;
  color: rgb(155, 155, 155);
  line-height: 1
}

footer {
  background: rgb(55, 55, 55);
  margin-top: auto;
  width: 100%
}

.footer-list-top {
  width: 33.333%
}

.footer-list-top>li {
  text-align: center;
  padding-bottom: 10px
}

.footer-list-header {
  padding: 10px 0 5px 0;
  color: #fff;
  font: 2.3vw "Oswald", sans-serif
}

.footer-list-anchor {
  font: 1.3em "Open Sans", sans-serif
}

.footer-social-section {
  width: 100%;
  align-items: center;
  justify-content: space-around;
  position: relative;
  margin-top: 5px;
}

.footer-social-section::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 10px;
  border-top: 1px solid $primary-line-color;
  width: calc(100% - 20px)
}

.footer-social-overlap {
  position: relative;
  z-index: 2;
  background: rgb(55, 55, 55);
  padding: 0 20px
}

.footer-social-connect {
  display: flex;
  align-items: center;
  font: 3.5em "Oswald", sans-serif;
  color: #fff
}

.footer-social-small {
  font-size: 0.6em;
  padding: 0px 20px
}

.footer-social-overlap>a {
  font-size: 3em
}

.footer-social-overlap>a:not(:first-child) {
  margin-left: 0.38em
}

.footer-bottom-section {
  width: 100%;
  padding: 10px;
  border-top: 1px solid $primary-line-color;
  margin-top: 10px
}

.footer-bottom-section>div:first-child {
  margin-right: auto
}

.footer-bottom-wrapper {
  font-size: 1.5em;
  color: #fff
}

.footer-address {
  display: inline;
  font-style: normal
}

@media only screen and (max-width: 768px) {
  .footer-list-header {
    font-size: 2em
  }

  .footer-list-anchor {
    font-size: 1.1em
  }

  .footer-social-connect {
    font-size: 2.5em
  }

  .footer-social-overlap>a {
    font-size: 2.24em
  }

  .footer-bottom-wrapper {
    font-size: 1.3em
  }
}

@media only screen and (max-width: 568px) {
  main {
    font-size: 5em
  }

  .footer-list-top {
    width: 100%
  }

  .footer-list-header {
    font-size: 3em;
  }

  .footer-list-anchor {
    font-size: 1.5em
  }

  .footer-social-section {
    justify-content: center
  }

  .footer-social-section::after {
    top: 25%
  }

  .footer-social-connect {
    margin-bottom: 10px;
    padding: 0 10px
  }

  .footer-social-overlap {
    display: flex;
    justify-content: center;
  }

  .footer-social-icons-wrapper {
    width: 100%;
    padding: 0
  }

  .footer-social-overlap>a:not(:first-child) {
    margin-left: 20px;
  }

  .footer-bottom-section {
    padding: 0 5px 10px 5px
  }

  .footer-bottom-wrapper {
    text-align: center;
    width: 100%;
    margin-top: 10px
  }
}

@media only screen and (max-width: 480px) {
  .footer-social-overlap>a {
    margin: auto
  }

  .footer-social-overlap>a:not(:first-child) {
    margin-left: 0;
  }

  .footer-bottom-rights {
    display: block
  }
}

@media only screen and (max-width: 320px) {
  .footer-list-header {
    font-size: 2.2em
  }

  .footer-list-anchor {
    font-size: 1.2em
  }

  .footer-social-connect {
    font-size: 2.4em
  }

  .footer-social-overlap>a {
    font-size: 2.24em
  }

  .footer-bottom-wrapper {
    font-size: 1.3em
  }
}
</style>
