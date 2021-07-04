<template>
  <aside class="menu" v-show="isMenuVisible">
    
    
      <div id="navbar">
        <a class="navbar-item"> Mapa do IFB </a>
        <router-link class="navbar-item" to="/horarios"> Grade Horária</router-link>
        <router-link to="/professores" class="navbar-item">Professores</router-link> 
        <router-link class="navbar-item" to="/avisos" v-show="user.admin==1 || user.representante==1
          || user.tipoUsuario==1">Avisos</router-link>
      </div>
    
    
    <div class="navbar-item has-dropdown is-hoverable" id="navbar">
      <div id="navbar">
        <a class="navbar-link" v-show="user.admin==1"> Administração <i class="fa fa-lg"></i></a>
        <div class="navbar-dropdown" id="itensMenu">
          <a class="navbar-item">
            <router-link to="/usuarioadmin" >Usuários</router-link>
            <router-link to="/turmaadmin">Turmas</router-link>
            <router-link to="/disciplinasadmin">Disciplinas</router-link>
          </a>
        </div>
      </div>
    </div>
    <div class="navbar-item has-dropdown is-hoverable" id="navbar">
      <div id="navbar">
        <hr class="navbar-divider" />
        <div class="versao" id="versao">Version 1.8.1</div>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Menu",
  computed: mapState(["isMenuVisible", 'user']),
};
</script>

<style scoped>
#navbar {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 300px;
  background-color: azure;
  text-decoration: none;
}
.menu {
  grid-area: menu;
  background-color: rgb(62, 151, 62);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

#navbar a {
  text-decoration: none;
  color: #000;
  display: block;
}
#navbar a:hover {
  text-decoration: none;
}

Aside.menu > button#butao {
  position: absolute;
  width: 100px;
  height: 5%;
  margin-left: 190px;
}
Aside.menu > button#butao:hover {
  background-color: rgb(62, 151, 62);
}
Aside.menu > input.input {
  position: relative;
  width: 180px;
  height: 4.5%;
  color: #000;
  justify-self: flex-start;
  text-decoration: none;
  margin-right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
}

#itensMenu {
  text-decoration: none;
}
#itensMenu a {
  text-decoration: none;
  color: #000;
}
#itensMenu a:hover {
  text-decoration: none;
}
.versao{
  color: #afaeae;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-decoration: none;
  text-align: center;
}
</style>