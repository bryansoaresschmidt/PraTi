package com.example.Exercicio16.controller;

import com.example.Exercicio16.exceptions.EntityAlreadyExistsException;
import com.example.Exercicio16.model.Produto;
import com.example.Exercicio16.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/produto")
public class ProdutoController {
    @Autowired
    private ProdutoService produtoService;

    @GetMapping
    public ResponseEntity<List<Produto>> findAllProdutos() {
        return ResponseEntity.ok(produtoService.findAllProdutos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> findProdutoById(@PathVariable Long id) {
        Optional<Produto> produtoOpt = produtoService.findProdutoById(id);
        if(produtoOpt.isEmpty() || produtoOpt == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(produtoOpt.get());
    }

    @PostMapping
    public ResponseEntity<Produto> createProduto(@RequestBody Produto produto) {
        try {
            Produto newProduto = produtoService.createProduto(produto);
            return ResponseEntity.status(HttpStatus.CREATED).body(newProduto);
        } catch (EntityAlreadyExistsException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produto> updateProduto(@PathVariable Long id, @RequestBody Produto produto) {
        Produto newProduto = produtoService.updateProduto(id, produto);
        if(newProduto == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(newProduto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteProduto(@PathVariable Long id) {
        boolean deleted = produtoService.deleteProduto(id);
        if (!deleted) {
            return ResponseEntity.status(404).body("Produto Id: " + id + " não existe no banco de dados");
        }
        return ResponseEntity.ok("Produto deletado com sucesso");
    }

}
