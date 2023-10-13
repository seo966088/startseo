<?php
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$domain = $data['domain'];
$websites = $data['websites'];

$results = [];

foreach ($websites as $website) {
    $isSuccess = rand(0, 1) == 1; // Simulating success/failure randomly
    $results[] = array('website' => $website, 'isSuccess' => $isSuccess);
}

echo json_encode($results);
?>
