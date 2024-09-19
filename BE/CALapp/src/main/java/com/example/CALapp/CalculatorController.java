package com.example.CALapp;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")  // Base URL for all APIs
@CrossOrigin(origins = "http://localhost:3000")  // Allow requests from React frontend
public class CalculatorController {

    @GetMapping("/add")
    public int add(@RequestParam int a, @RequestParam int b) {
        return a + b;
    }

    @GetMapping("/subtract")
    public int subtract(@RequestParam int a, @RequestParam int b) {
        return a - b;
    }

    @GetMapping("/multiply")
    public int multiply(@RequestParam int a, @RequestParam int b) {
        return a * b;
    }

    @GetMapping("/divide")
    public double divide(@RequestParam int a, @RequestParam int b) {
        if (b == 0) {
            throw new ArithmeticException("Division by zero is not allowed.");
        }
        return (double) a / b;
    }

    @GetMapping("/bmi")
public double calculateBMI(@RequestParam double weight, @RequestParam double height) {
    if (height <= 0) {
        throw new IllegalArgumentException("Height must be greater than zero.");
    }
    // BMI formula: weight (kg) / (height (m) * height (m))
    return weight / (height * height);
}

}
