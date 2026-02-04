<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    header('Content-Type: application/json; charset=utf-8');

    $name = $_POST["name"] ?? null;
    $surname = $_POST["surname"] ?? null;
    $age = $_POST["age"] ?? null;

    echo json_encode([
        'name' => $name,
        'surname' => $surname,
        'age' => $age,
    ]);
}
