const MyApp = {
    data() {
      return {
        name: "",
        status: "",
        gender: "",
        species: "",
        personagens: []
      };
    },
    mounted() {
        this.fetchCharacters();
    },
    methods: {
        fetchCharacters() {
            const url = new URL("https://rickandmortyapi.com/api/character");
            if (this.name) url.searchParams.append("name", this.name);
            if (this.status) url.searchParams.append("status", this.status);
            if (this.gender) url.searchParams.append("gender", this.gender);
            if (this.species) url.searchParams.append("species", this.species);

            fetch(url)
              .then((response) => response.json())
              .then((data) => {
                this.personagens = data.results || [];
              });
        },
        search() {
            this.fetchCharacters();
            this.name = "";
            this.status = "";
            this.gender = "";
            this.species = "";
        }
    }
};

Vue.createApp(MyApp).mount('#app');
