package com.example.Exercicio16.service;

import com.example.Exercicio16.exceptions.EntityAlreadyExistsException;
import com.example.Exercicio16.model.Produto;
import com.example.Exercicio16.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository produtoRepository;

    public List<Produto> findAllProdutos() {
        return produtoRepository.findAll();
    }

    public Optional<Produto> findProdutoById(Long id) {
        return produtoRepository.findById(id);
    }

    public Produto createProduto(Produto produto) {
        if (produtoRepository.existsByNome(produto.getNome())) {
            throw new EntityAlreadyExistsException("Produto " + produto.getNome() + " já consta no banco de dados");
        }
        return produtoRepository.save(produto);
    }

    public Produto updateProduto(Long id, Produto newProduto) {
        if (!produtoRepository.existsById(id)) {
            return null;
        }
        newProduto.setId(id);
        return produtoRepository.save(newProduto);
    }

    public boolean deleteProduto(Long id) {
        if (!produtoRepository.existsById(id)) {
            return false;
        }

        produtoRepository.deleteById(id);
        return true;
    }
}
