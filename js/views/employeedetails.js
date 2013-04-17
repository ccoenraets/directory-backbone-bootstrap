directory.EmployeeView = Backbone.View.extend({

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        $('#details', this.el).html(new directory.EmployeeSummaryView({model:this.model}).render().el);
        this.model.reports.fetch({
            success:function (data) {
                if (data.length == 0)
                    $('.no-reports').show();
            }
        });
        $('#reports', this.el).append(new directory.EmployeeListView({model:this.model.reports}).render().el);
        return this;
    }
});

directory.EmployeeSummaryView = Backbone.View.extend({

    initialize:function () {
        this.model.on("change", this.render, this);
    },

    render:function () {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});