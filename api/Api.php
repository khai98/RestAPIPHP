<?php

class API
{
  private $connect = '';

  function __construct()
  {
    $this->database_connection();
  }

  function database_connection()
  {
    $this->connect = new PDO("mysql:host=localhost;dbname=useer", "root", "root");
  }

  function fetch_all()
  {
    $query = "SELECT * FROM users ";
    $statement = $this->connect->prepare($query);
    if ($statement->execute()) {
      while ($row = $statement->fetch(PDO::FETCH_ASSOC)) {
        $data[] = $row;
      }
      return $data;
    }
  }

  function insert()
  {
    if (isset($_POST["names"])) {
      $form_data = array(
        ':names' => $_POST["names"],
        ':email' => $_POST["email"]
      );
      $query = "INSERT INTO users (names, email) VALUES (:names, :email)";
      $statement = $this->connect->prepare($query);
      if ($statement->execute($form_data)) {
        $data[] = array(
          'success' => '1'
        );
      } else {
        $data[] = array(
          'success' => '0'
        );
      }
    } else {
      $data[] = array(
        'success' => '0'
      );
    }
    return $data;
  }

  function fetch_single($id)
  {
    $query = "SELECT * FROM users WHERE id='" . $id . "'";
    $statement = $this->connect->prepare($query);
    if ($statement->execute()) {
      foreach ($statement->fetchAll() as $row) {
        $data['names'] = $row['names'];
        $data['email'] = $row['email'];
      }
      return $data;
    }
  }

  function update()
  {
    var_dump($_POST);
    var_dump($_GET);

    if (isset($_REQUEST["names"])) {
      $form_data = array(
        ':names' => $_POST['names'],
        ':email' => $_POST['email'],
        ':id' => $_POST["id"]
      );
      $query = " UPDATE users SET names = :names, email = :email WHERE id = :id ";
      $statement = $this->connect->prepare($query);
      // var_dump($form_data);
      if ($statement->execute($form_data)) {
        $data[] = array(
          'success' => '1'
        );
      } else {
        $data[] = array(
          'success' => '0'
        );
      }
    } else {
      var_dump(pingggggggggggg);
      $data[] = array(
        'success' => '0'
      );
    }
    return $data;
  }

  function delete($id)
  {
    $query = "DELETE FROM users WHERE id = '" . $id . "'";
    $statement = $this->connect->prepare($query);
    if ($statement->execute()) {
      $data[] = array(
        'success' => '1'
      );
    } else {
      $data[] = array(
        'success' => '0'
      );
    }
    return $data;
  }
}


