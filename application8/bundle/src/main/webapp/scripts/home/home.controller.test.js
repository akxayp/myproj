describe('HomeController', function () {
    beforeEach(module('com.vyomlabs8.application8.home'));

    beforeEach(inject(function ($controller, $rootScope) {
        this.$rootScope = $rootScope;

        this.ctrl = $controller('HomeController', {
            $scope: this.$rootScope.$new()
        });
    }));

    afterEach(function () {
        this.$rootScope.$destroy();
    });

    it('should exist', function () {
        expect(this.ctrl).toBeDefined();
    });
});