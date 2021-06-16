<template>
  <div>
    <PageTitle
      icon="fa fa-commenting"
      main="Notificações"
      sub="Todas as notificações"
    />
    <b-form>
      <div>
        <b-form-group label="Escolha a turma: " label-for="notificacao-turma">
          <b-form-select
            id="notificacao-turma"
            :options="turmas"
            v-model="notificacao.turma"
          />
        </b-form-group>
        <b-button variant="primary"  class="btnBuscar" @click="loadNotificacoesByTurmas()"
          >Buscar</b-button>
      </div>
      
    </b-form>

    <p v-for="(notificacao, index) in notificacoes" :key="index">
      <b-card border-variant="success" bg-variant="light" text-variant="black">
        <p><b>Assunto: </b>{{ notificacoes[index].assunto }}</p>
        <p><b>Remetente: </b>{{ notificacoes[index].Remetente }}</p>
      </b-card>
    </p>
  </div>
</template>
<script>
//import Turmas from "../home/Turmas";
import axios from "axios";
import { baseApiUrl /*showError*/ } from "@/global";
import PageTitle from "../template/PageTitle";
//import Notificacao from "../home/Notificacao"
export default {
  name: "Notificacoes",
  components: {
    PageTitle,
    //Notificacao
  },
  data: function () {
    return {
      notificacao: {},
      notificacoes: [],
      turmas: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "assunto", label: "Assunto", sortable: true },
        { key: "Remetente", label: "Remetente", sortable: true },
        { key: "createdAt", label: "Criado em", sortable: true },
      ],
    };
  },
  methods: {
    loadNotificacoesByTurmas() {
          const url = `${baseApiUrl}/notificacoes/turmas/${this.notificacao.turma}`;
          axios.get(url).then((res) => {
            this.notificacoes = res.data;
          });
        },
    reset() {
       this.loadNotificacoes(), this.loadTurmasSel();
    },
    loadNotificacoes() {
      const url = `${baseApiUrl}/notificacoes`;
      axios.get(url).then((res) => {
        this.notificacoes = res.data;
        //console.log(this.notificacoes)
      });
    },

    buscar() {},
    loadTurmasSel() {
      const url = `${baseApiUrl}/turmas`;
      axios.get(url).then((res) => {
        this.turmas = res.data.map((turma) => {
          return { value: turma.id, text: `${turma.nome}` };
        });
      });
    },
    loadTurmas() {
      for (var i of this.notificacoes) {
        console.log(i.assunto);
        axios
          .get(`${baseApiUrl}/notificacoes/assunto/${i.assunto}`)
          .then((res) => {
            this.abc = res.data;
            console.log(this.abc);
            return this.abc;
          });
      }
    },
  },
  mounted() {
    this.loadNotificacoes();
    this.loadTurmasSel();
  },
};
</script>
<style scoped>
</style>