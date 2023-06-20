<template>
  <div class="about">
    <h1>Bem vindo {{ nome }}</h1>

    <label for="descricao">descricao: </label>
    <input id="descricao" type="text" v-model="descricao" />
    <label for="dataHoraInicio">dataHoraInicio: </label>
    <input id="dataHoraInicio" type="datetime-local" v-model="dataHoraInicio" />
    <label for="duracao">duracao: </label>
    <input id="duracao" type="integer" v-model="duracao" />
    <button @click="cadastrar">Cadastrar</button>



    <input type="text" v-model="nome" />

    <table>
      <thead>
        
        <td>Descrição</td>
        <td>Data/Hora</td>
        <td>Duração</td>
        
      </thead>
      <tr v-for="usuario in usuarios" :key="usuario.id">
        
        <td>{{ usuario.descricao }}</td>
        <td>{{ usuario.dataHoraInicio }}</td>
        <td>{{ usuario.duracao }} {{ 'h' }}</td>
        
      </tr>
    </table>
  </div>
</template>







<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { onBeforeMount} from 'vue';
import axios from 'axios';


const nome = ref("Nome");
const usuarios = ref();




async function atualizar() {
  usuarios.value = (await axios.get("https://8080-daniloel-springlabiv202-31witasphlu.ws-us98.gitpod.io/consulta")).data;
}



const descricao = ref();
const dataHoraInicio = ref();
const duracao = ref();


async function cadastrar() {
  await axios.post("https://8080-daniloel-springlabiv202-31witasphlu.ws-us98.gitpod.io/consulta",
    {
      descricao: descricao.value,
      dataHoraInicio: dataHoraInicio.value,
      duracao: duracao.value,
      
    });

  atualizar();

  limparInput();

}


function limparInput() {
  descricao.value = '';
  dataHoraInicio.value = '';
  duracao.value = '';
}


onMounted(() => {
    atualizar();
    

  });

onBeforeMount(() => {
  limparInput();
});

  
</script>