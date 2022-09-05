FROM node:18.7-slim as base
RUN apt update && apt install -y --no-install-recommends \
    git \
    ca-certificates \
    openjdk-11-jre \
    zsh \
    curl \
    wget \
    fonts-powerline
ENV JAVA_HOME="/usr/lib/jvm/java-11-openjdk-am64"        
USER node
WORKDIR /home/node/app
RUN sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.2/zsh-in-docker.sh)" -- \
    -t https://github.com/romkatv/powerlevel10k.git \
    -p git \
    -p https://github.com/zsh-users/zsh-syntax-highlighting \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-completions \
    -a 'export TERM=xterm-256color'

RUN echo '[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh' >> ~/.zshrc && \
    echo 'HISTFILE=/home/node/zsh/.zsh_history' >> ~/.zshrc
    
#COPY package.json ./
#COPY yarn.lock ./
#RUN yarn install
#COPY . .

FROM base as dev
#CMD yarn run dev
CMD ["sh", "-c", "yarn install && tail -f /dev/null"]
# FROM base as prod
# #RUN yarn run build
# CMD yarn run start