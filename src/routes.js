import Autores from '@/views/autores'
import CrearAutor from '@/views/createAutor'
import VerAutor from '@/views/viewAutor'
import home from '@/views/Home';
export default [
    { path: '/', component: home, name:'home' },
    { path: '/autores', component:Autores, name:'autor' },
    { path: '/autores/create', component:CrearAutor, name:'crearAutor' },
    { path: '/autores/:id', component:VerAutor, name:'verAutor' }
]