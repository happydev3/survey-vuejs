<template>
<div class="it-header-wrapper">
      <div class="it-header-slim-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="it-header-slim-wrapper-content">
                <a class="d-none d-lg-block navbar-brand" href="https://www.arpa.piemonte.it/" target="_blank">ARPA Piemonte</a>
                <div class="nav-mobile">
                  <nav>
                    <a class="it-opener d-lg-none" data-toggle="collapse" href="#menu4" role="button" aria-expanded="false" aria-controls="menu4">
                      <span>ARPA Piemonte</span>
                      <img src="@/assets/images/logo arpa colori.svg" class="icon">
                    </a>
                    <div class="link-list-wrapper collapse" id="menu4">
                      <ul class="link-list">
                        <li>
                          <router-link class="list-item" exact-active-class="active" to="/">Calcola</router-link>
                        </li>
                        <li>
                          <router-link class="list-item" exact-active-class="active" to="/about">Info</router-link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div class="it-header-slim-right-zone">
                  <div class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded="false">
                      <span>ITA</span>
                      <svg class="icon d-none d-lg-block">
                        <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-expand"></use>
                      </svg>
                    </a>
                    <div class="dropdown-menu">
                      <div class="row">
                        <div class="col-12">
                          <div class="link-list-wrapper">
                            <ul class="link-list">
                              <li :key="index" v-for="(lang, index) in langs"><a class="list-item" @click="selectLang(lang.value)"><span>{{lang.text}}</span></a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="it-nav-wrapper">
        <div class="it-header-center-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="it-header-center-content-wrapper">
                  <div class="it-brand-wrapper">
                    <a href="/">
                      <img src="@/assets/images/logo arpa colori.svg" class="icon">
                      <div class="it-brand-text">
                        <h2 class="no_toc">CO<sub>2</sub> footprint calculator</h2>
                        <h3 class="no_toc d-none d-md-block">Calcola l'impronta carbonica della tua famiglia</h3>
                      </div>
                    </a>
                  </div>
                  <div class="it-right-zone">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="it-header-navbar-wrapper">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <!--start nav-->
                <nav class="navbar navbar-expand-lg has-megamenu">
                  <button class="custom-navbar-toggler" type="button" aria-controls="nav02" aria-expanded="false" aria-label="Toggle navigation" data-target="#nav02">
                    <svg class="icon">
                      <use xlink:href="/bootstrap-italia/dist/svg/sprite.svg#it-burger"></use>
                    </svg>
                  </button>
                  <div class="navbar-collapsable" id="nav02" style="display: none;">
                    <div class="overlay" style="display: none;"></div>
                    <div class="close-div sr-only">
                      <button class="btn close-menu" type="button"><span class="it-close"></span>close</button>
                    </div>
                    <div class="menu-wrapper">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <router-link class="nav-link" exact-active-class="active" to="/">Calcola</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" exact-active-class="active" to="/about">Info</router-link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    
</template>

<script>
import { LOCALE } from '@/store/mutationType';
import LOGO from '@/assets/images/logo.png'
export default {
    data() {
        return {
            LOGO: LOGO,
            langs: [
                {text: 'ENGLISH', value: 'en'},
                {text: 'FRENCH', value: 'fr'},
                {text: 'ITALIAN', value: 'it'},
            ]
        }
    },
    methods: {
        selectLang(lang) {
            this.$store.commit(LOCALE, lang)
            this.$i18n.locale = lang;
        }
    }
    
}
</script>

<style>

</style>