<template>
  <div id="app">
    <header>
      <h1>river1</h1>
<!--       <div id="tabsBg"></div>
 -->      <ul>
        <router-link tag="li" to="/One"><a>All</a></router-link>
        <router-link tag="li" to="/Two"><a>Tech</a></router-link>
        <router-link tag="li" to="/Three"><a>Design</a></router-link>
        <router-link tag="li" to="/Four"><a>Art</a></router-link>
        <router-link tag="li" to="/Five"><a>Cats</a></router-link>
        <router-link tag="li" to="/Six"><a>Food</a></router-link>
        <router-link tag="li" to="/Seven"><a>Linux</a></router-link>
        <router-link tag="li" to="/Eight"><a>UI</a></router-link>
        <router-link tag="li" to="/Nine" id="lastTag"><a>UX</a></router-link>
      </ul>
    </header> <!-- end banner -->
    <div id="newsletter">Get our newsletter 
      <input type="email" name="email" class="newletterInput" placeholder="your email">
      <button type="button" id="sendEmail">OK</button>
      <button id="close" onclick='this.parentNode.parentNode.removeChild(this.parentNode); return false;'> X</button>
    </div>
    <router-view></router-view>
    <footer>
      <p>personal project - zoemhart</p>
    </footer>
  </div> <!-- end app -->
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
/*TODO: font-face
*/

#app, p, input, button, .upButton, h3{
  font-family: 'Iosevka', Helvetica, sans-serif;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: -0rem;
/*  border: 1px solid red;
*/}

@media screen and (min-width: 900px){
   #component{
    margin: 0 3%;
  }
}
@media screen and (min-width: 1400px){
   #component{
    margin: 0 11%;
  }
}

header, footer{
  background-color: #77B07F;
  color: black;
}

header {
  padding: 0.1rem;
  text-align: center;
  border-bottom: 1px solid black;
}

footer {
  padding: 1rem;
  text-align: center;
  border-top: 1px solid black;
}

#tabsBg{
  position: relative;  
  background-color: black;
  opacity: 0.4;
  height: 25px;
}

ul {
  list-style-type: none;
  display: inline-flex;
  padding: 0 ;
  margin: 0;
}

ul li {
  padding: 0.2rem 3rem;
  margin: -0.1rem;
  border: 1px solid black;
  border-bottom: 0;
  background-color: #65976D;
}

li:hover {
  background-color: #71A57D;
}

a {
  color: black;
  text-decoration: none;
  /*better click surface*/
  margin: -0.2rem -3rem;
  padding: 0.2rem 3rem;
}

li.router-link-active {
  background-color: #77B07F;
  border-top: 0;
}

#newsletter{
  background-color: white;
  text-align: right;
  border: 1px solid black;
  padding: 0.4rem 0.69rem;
  float: right;
  margin: 0.5rem;
}

button {
  padding: 0.3rem;
  margin: -0.15rem 0 -0.15rem  0.3rem;
  background-color: white;
  border: none;
  cursor: pointer;
}

button:focus, input:focus {outline:0;}

.newletterInput::-webkit-input-placeholder { color: rgba(0,0,0,0.5);   font-family: 'Iosevka', Helvetica, sans-serif;}
.newletterInput:-moz-placeholder { color: rgba(0,0,0,0.5);   font-family: 'Iosevka', Helvetica, sans-serif;}
.newletterInput::-moz-placeholder { color: rgba(0,0,0,0.5);   font-family: 'Iosevka', Helvetica, sans-serif;}
.newletterInput:-ms-input-placeholder { color: rgba(0,0,0,0.5);   font-family: 'Iosevka', Helvetica, sans-serif;}

.top{
/*  border: 1px solid beige;
*/  margin: 0.4rem;
}

.titre{
margin: 0.5rem;
padding: 1rem;
/*border: 1px solid yellow;
*/}

article{
margin: 0.5rem;
padding: 1rem;
border: 1px dotted black;
}

h3{
margin-bottom: 0.4rem;
}

article img{
width:100%;
}

.upButton {
  border: 1px solid black;
  margin-top: 0.5rem;
}

p{
   white-space: no-wrap;
   text-overflow: ellipsis;
   overflow:hidden;
}
</style>

