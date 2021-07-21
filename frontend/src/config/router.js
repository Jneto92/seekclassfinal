import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home'
import PerfilPages from '../components/admin/PerfilPages'
import AdminPage from '../components/admin/AdminPage'
import Avisos from '../components/home/Avisos'
import Notificacao from '../components/home/Notificacoes'
import Professores from '../components/home/Professores'
import UsuarioAdmin from '../components/admin/UsuarioAdmin'
import TurmaAdmin from '../components/admin/TurmaAdmin'
import DisciplinaAdmin from '../components/admin/DisciplinaAdmin'
import Disciplinas from '../components/home/Disciplinas'
import Professor from '../components/home/ProfessorId'
import Auth from '../components/auth/Auth'
import Horarios from '../components/home/Horarios'
import AdminGrades from '../components/admin/HorariosAdmin'
import EsqueceuSenha from '../components/home/EsqueceuSenha'

Vue.use(VueRouter)

const routes = [
{
    name: 'home',
    path: '/',
    component: Home
},{
    name: 'adminpage',
    path: '/admin',
    component: AdminPage
},{
    name: 'usuarioadmin',
    path: '/usuarioadmin',
    component: UsuarioAdmin
},{
    name: 'turmaadmin',
    path: '/turmaadmin',
    component: TurmaAdmin
},{
    name: 'disciplinasadmin',
    path: '/disciplinasadmin',
    component: DisciplinaAdmin
},{
    name: 'perfilPages',
    path: '/perfil',
    component: PerfilPages
},{
    name: 'aviso',
    path: '/avisos',
    component: Avisos
},{
    name: 'notif',
    path: '/notificacoes',
    component: Notificacao
},{
    name: 'professores',
    path: '/professores',
    component: Professores
},{
    name: 'disciplinas',
    path: '/disciplinas/:id',
    component: Disciplinas
},{
    name: 'professor',
    path: '/professor/:id',
    component: Professor
}, {
    name: 'auth',
    path: '/auth',
    component: Auth
},{
    name:'horarios',
    path: '/horarios',
    component: Horarios
},{
    name: 'adminhorarios',
    path: '/adminhorarios',
    component: AdminGrades
},{
    name: 'esqueceusenha',
    path: '/esqueceusenha',
    component: EsqueceuSenha
}]

export default  new VueRouter({
    mode: 'history',
    routes
})

