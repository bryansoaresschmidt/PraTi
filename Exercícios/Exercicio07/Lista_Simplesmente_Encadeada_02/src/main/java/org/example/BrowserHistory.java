package org.example;

import java.util.LinkedList;

public class BrowserHistory {
    LinkedList<String> history;
    int maxSize;

    public BrowserHistory(int maxSize) {
        this.history = new LinkedList<>();
        this.maxSize = maxSize;
    }
}
