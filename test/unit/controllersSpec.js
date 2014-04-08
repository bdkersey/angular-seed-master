'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){
	describe('MyCtrl1', function(){
		var scope= {}, ctr1;
		beforeEach(module('myApp'));

		beforeEach(inject(function($controller) {
			scope = {};
			ctr1 = $controller('MyCtrl1', {$scope: scope})
		}));

		it('should exists', inject(function() {
			expect(ctr1).not.toBe(undefined);
		}));

		it('should have a car property', inject(function() {
			expect(scope.car).not.toBe(undefined);
		}));
		
		it('should have a make property', inject(function() {
			expect(scope.car.make).not.toBe(undefined);
		}));
		
		it('should have a model property', inject(function() {
			expect(scope.car.model).not.toBe(undefined);
		}));
		
		it('should have a year property', inject(function() {
			expect(scope.car.year).not.toBe(undefined);
		}));
		
		it('should have a price property', inject(function() {
		expect(scope.car.price).not.toBe(undefined);
		}));
		
		it('car should include honda', inject(function() {
		expect(scope.car.make).toContain('honda');
		}));
		
		it('car should include Civic', inject(function() {
		expect(scope.car.model).toContain('Civic');
		}));
	});
	
	describe("MyCtrl2", function(){
		var scope= {}, ctr2;
		beforeEach(module('myApp'));

		beforeEach(inject(function($controller) {
			scope = {};
			ctr2 = $controller('MyCtrl2', {$scope: scope})
		}));
		
		it('should exists', inject(function() {
			expect(ctr2).not.toBe(undefined);
		}));
		
		it('should have cars property', inject(function(){
			expect(scope.cars).not.toBe(undefined);
		}));
		
		it('should have 5 cars', inject(function(){
			expect(scope.cars.length).toBe(4);
		}));
		
		it('should have 6 cars', inject(function(){
			scope.cars.push({make:'Ford',model:'mustang',year:'1977',price:39000});
			expect(scope.cars.length).toBe(5);
		}));
		
		it('second car should be Honda', inject(function(){
			expect(scope.cars[1].make).toBe('honda');
		}));
	});
});
