export const listTemplate = {
  data: () => ({
    id: null,
    datas: [],
    filters: {
      search: '',
    },
    pagination: {
      page: 1,
      pageSize: 20,
    },
    total: 0,
    modalVisible: false,
    modalTitle: '',
    firstTime: true,
  }),
  computed: {
    params() {
      let params = {
        ...this.pagination,
        ...this.filters,
      };

      return params;
    },
  },
  mounted() {
    this.fetchList();
  },
  methods: {
    fetchList(search = null) {
      this.filters.search = search;
      this.modalVisible = false;
      this.$store.dispatch('settings/setLoading', true);
      this.actions.get(this.params).then(({
        data
      }) => {
        if (data.data) {
          this.datas = data.data;
        } else {
          this.datas = data;
        }

        if (data.total) {
          this.total = data.total;
        }
      }).catch(err => {
        console.log(err)
      }).finally(() => this.$store.dispatch('settings/setLoading', false));
    },
    handleAdd() {
      this.id = null;
      this.modalVisible = true;
    },
    handleEdit(id) {
      this.id = id;
      this.modalVisible = true;
    },
    paginationPageClick(e, page) {
      this.pagination.page = page;
      this.fetchList()
    },
    handleDelete(id) {
      if (id) {
        this.$swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          customClass: {
            confirmButton: 'btn btn-primary',
            cancelButton: 'btn btn-outline-danger ml-1',
          },
          buttonsStyling: false,
        }).then(result => {
          if (result.value) {
            this.actions.delete({
              id
            }).then(res => {
              this.$swal({
                icon: 'success',
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                customClass: {
                  confirmButton: 'btn btn-success',
                },
              });
              this.fetchList();
            })
          } else if (result.dismiss === 'cancel') {
            this.$swal({
              title: 'Cancelled',
              text: 'Your imaginary file is safe :)',
              icon: 'error',
              customClass: {
                confirmButton: 'btn btn-success',
              },
            })
          }
        })
      }
    }
  },

}