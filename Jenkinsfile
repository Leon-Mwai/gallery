pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Leon-Mwai/gallery'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Server') {
            steps {
                sh 'node server.js &'
            }
        }
    }

    post {
        success {
            echo "Pipeline executed successfully!"
        }
        failure {
            mail to: 'muriithileon2007@gmail.com',
                 subject: "Jenkins Pipeline Failed",
                 body: "Check Jenkins logs for details."
        }
    }
}
