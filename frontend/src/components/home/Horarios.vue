<template>
  <div class="horarios">
    <PageTitle icon="fa fa-table" main="Grade Horaria" sub="Horários" />
    <b-form>
      <b-row>
        <b-form-group label="Escolha uma turma: " label-for="horarios-turmas">
          <b-form-select
            
            id="horarios-turmas"
            :options="turmas"
            v-model="horario.turma"
          />
        </b-form-group>
      </b-row>
      <b-button variant="primary" @click="carregarHorarios">Buscar</b-button>
    </b-form>
    <b-table hover striped :items="horarios" :fields="fields"> </b-table>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "@/global";
import PageTitle from "../template/PageTitle";
export default {
  name: "TSIN1",
  components: {
    PageTitle,
  },
  data: function () {
    return {
      turmas: [],
      horario: {},
      horarios: [],
      nomeTurma: {},
      fields: [
        { key: "horario", label: "Horário" },
        { key: "segunda", label: "Segunda" },
        { key: "terca", label: "Terça" },
        { key: "quarta", label: "Quarta" },
        { key: "quinta", label: "Quinta" },
        { key: "sexta", label: "Sexta" },
      ],
    };
  },
  methods: {
    loadTurmas() {
      const url = `${baseApiUrl}/turmas`;
      axios.get(url).then((res) => {
        this.turmas = res.data.map((turma) => {
          return { value: turma.id, text: `${turma.nome}` };
        });
      });
    },
    loadHorarios(a) {
    console.log(a);
      const url = `${baseApiUrl}/horarios/${a}`;
      axios.get(url).then((res) => {
        this.horarios = res.data;
      });
    },
    carregarHorarios() {
      //console.log(this.horario.turma);
      const url = `${baseApiUrl}/turmas/${this.horario.turma}`;
      axios.get(url).then((res) => {
        this.nomeTurma = res.data;
        //console.log(this.nomeTurma.nome);
        this.loadHorarios(this.nomeTurma.nome);
      });

      
    },
  },
  mounted() {
    this.loadTurmas();
    //this.loadHorarios();
  },
};
</script>

<style>
</style>