directory.BrowseView = Backbone.View.extend({

    initialize: function () {
        this.employees = new directory.EmployeeCollection();
        this.sortBy = 'firstName';
        this.employees.comparator = this.sortBy;
        this.employees.fetch({reset: true, data: {name: ''}});
        this.listView = new directory.EmployeeListView({model: this.employees, className: 'browse-list'});
        this.employees.on('sort', this.render, this);
    },

    render: function () {
        this.$el.html(this.template());
        $("#sortBy").val(this.sortBy);
        $("#browseList", this.el).html(this.listView.render().el);
        return this;
    },

    events: {
        "change #sortBy":"sort"
    },

    sort: function() {
        this.sortBy = $("#sortBy").val();
        this.employees.comparator = this.sortBy;
        this.employees.sort();
    }

});