import React, { Component } from "react";

import Post from "../../components/Post";

import "./styles.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://imoblar.com/site/img/demo/profile.jpg"
        },
        date: "09 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://kitchenbathroomcreations.com/wp-content/uploads/2016/01/testi-3.jpg"
            },
            content:
              "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar:
            "http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg"
        },
        date: "09 Jun 2019",
        content:
          "Fala galera, beleza?\n Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma idéia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar:
                "https://elementor.topdigitaltrends.net/wp-content/uploads/2018/09/member-02-1.jpg"
            },
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar:
                "https://amp.insider.com/images/589a1779dd0895cb6e8b4a1d-750-750.jpg"
            },
            content:
              "Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="post-list">
        {posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
