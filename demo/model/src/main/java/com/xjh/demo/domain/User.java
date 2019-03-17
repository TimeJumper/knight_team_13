package com.xjh.demo.domain;

/**
 * 用戶模型
 */
public class User {
    private int id;

    /**
     * 用户的名称
     */
    private String name;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "user{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
