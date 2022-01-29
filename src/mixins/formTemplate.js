export const formTemplate = {
  props: {
    id: {
      type: Number,
      default: null,
    },
  },
  watch: {
    id: {
      immediate: true,
      handler(val) {
        if (val) return this.fetchData();

        this.setForm();
      },
    },
  },
  methods: {
    fetchData() {
      this.$store.dispatch('settings/setLoading', true);
      this.actions.show({
        id: this.id
      }).then(({
        data
      }) => {
        this.setForm(data);
      }).catch(err => {
        console.log(err);
      }).finally(() => this.$store.dispatch('settings/setLoading', false));
    },

    reformatData(form) {
      return form;
    },

    prepareFormData(elements, array_elements = null, exceptions = null) {
      let formData = new FormData();
      let data = null;

      for (let field in elements) {
        data = elements[field];
        if (exceptions != null && exceptions.indexOf(field) != -1) {
          continue;
        }

        if (data != null) {
          if (array_elements !== null && array_elements.indexOf(field) !== -1) {
            for (let index in data) {
              formData.append(field + '[]', data[index]);
            }
          } else {
            if (Array.isArray(data)) data = JSON.stringify(data);

            formData.append(field, data);
          }
        }
      }

      // formData.append('_method', elements.id ? 'PUT' : 'POST');

      return formData;
    },

    async saveSubmit() {

      const isValid = await this.$refs.observer.validate();
      if (isValid) {
        this.$store.dispatch('settings/setLoading', true);

        const action = this.form.id ? this.actions.update : this.actions.add;
        const form = this.reformatData(this.form);
        action(form)
          .then(() => {
            this.setForm();
            this.$emit('saved');
          })
          .catch(err => console.log(err))
          .finally(() => this.$store.dispatch('settings/setLoading', false));
      }
    },

    setForm: () => null,
  }
}