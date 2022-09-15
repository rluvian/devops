FROM golang:1.18 AS builder

WORKDIR /usr/src/go

COPY ./Arquivos/ .

RUN go build code.go
#CMD [ "./code" ]

FROM scratch
WORKDIR /usr/src/go

COPY --from=builder /usr/src/go .

#CMD [ "go" ,"run","code.go"]
CMD [ "./code" ]