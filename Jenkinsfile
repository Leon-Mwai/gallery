pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Leon-Mwai/gallery.git'
            }
        }

        stage('Build/Test') {
            steps {
                echo "Running build steps..."
                // Add shell commands here if needed
                sh 'echo "Milestone 2 pipeline works!"'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
    }
}
