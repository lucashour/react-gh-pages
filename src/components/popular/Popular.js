import React from 'react';
import API from '../../services/api';
import Loading from '../common/Loading';
import LanguageSelect from './LanguageSelect';
import Repos from './Repos';

export default class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos:            null,
      selectedLanguage: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage(language) {
    this.setState(() => {
      return {
        repos:            null,
        selectedLanguage: language
      };
    });

    API
      .fetchPopularRepos(language)
      .then((repos) => {
        this.setState(() => {
          return { repos }
        });
      });
  }

  render() {
    return (
      <div>
        <LanguageSelect
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage} />
        {!this.state.repos
          ? <Loading />
          : <Repos repos={this.state.repos} />}
      </div>
    );
  }
}
