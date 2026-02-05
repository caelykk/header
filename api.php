<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    header('Content-Type: application/json; charset=utf-8');

    $email = $_POST["email"] ?? null;
    $phone = $_POST["phone"] ?? null;
    $phoneAdd = $_POST["phoneAdd"] ?? null;
    $name = $_POST["name"] ?? null;
    $lastName = $_POST["lastName"] ?? null;
    $secondName = $_POST["secondName"] ?? null;
    $birthdate = $_POST["birthdate"] ?? null;
    $gender = $_POST["gender"] ?? null;

    echo json_encode([
        'email' => $email,
        'phone' => $phone,
        'phoneAdd' => $phoneAdd,
        'name' => $name,
        'lastName' => $lastName,
        'secondName' => $secondName,
        'birthdate' => $birthdate,
        'gender' => $gender,
    ]);

}