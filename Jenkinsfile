pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS = credentials('cred-1')  // Docker Hub Credentials ID
    }

    stages {
        stage('SCM') {
            steps {
                git branch: 'main', url: 'https://github.com/Pavish-kumar/guvidevopswarsday1.git'
            }
        }

        stage('Build') {
            steps {
                sh "mvn clean"
                sh "mvn install"
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t pavishkumar/guvidevopswarsday1 .'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'cred-1') {
                        sh 'docker push pavishkumar/guvidevopswarsday1'
                    }
                }
            }
        }
    }
}
