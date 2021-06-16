import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home'
import PerfilPages from '../components/admin/PerfilPages'
import AdminPage from '../components/admin/AdminPage'
import TSIV1 from '../components/home/TSIV1'
import TSIN1 from '../components/home/TSIN1'
import Avisos from '../components/home/Avisos'
import Notificacao from '../components/home/Notificacoes'
import Professores from '../components/home/Professores'
import TSIV2 from '../components/home/TSIV2'
import UsuarioAdmin from '../components/admin/UsuarioAdmin'
import TurmaAdmin from '../components/admin/TurmaAdmin'
import DisciplinaAdmin from '../components/admin/DisciplinaAdmin'
import Disciplinas from '../components/home/Disciplinas'
import Professor from '../components/home/ProfessorId'
import Auth from '../components/auth/Auth'

Vue.use(VueRouter)

const routes = [{
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
    name: 'tsiv1',
    path: '/tsiv1',
    component: TSIV1
},
{
    name: 'tsin1',
    path: '/tsin1',
    component: TSIN1 
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
    name: 'tsiv2',
    path: '/tsiv2',
    component: TSIV2
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
}]

export default  new VueRouter({
    mode: 'history',
    routes
})

